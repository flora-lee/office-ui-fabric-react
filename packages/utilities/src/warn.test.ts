import {
  setWarningCallback,
  warnDeprecations,
  warnMutuallyExclusive
} from './warn';
import { expect } from 'chai';

let _lastWarning: string;

describe('warnDeprecations', () => {
  beforeEach(() => {
    _lastWarning = undefined;
    setWarningCallback(message => _lastWarning = message);
  });

  afterEach(() => setWarningCallback(undefined));

  it('does not warn when unnecessary', () => {
    warnDeprecations('Foo', { bar: 1 }, { 'foo': null } as any);
    expect(_lastWarning).equals(undefined);
  });

  it('can warn on a deprecated prop', () => {
    warnDeprecations('Foo', { foo: 1 }, { 'foo': null });
    expect(_lastWarning).equals(`Foo property 'foo' was used but has been deprecated.`);
  });

  it('can warn on a deprecated prop with replacement', () => {
    warnDeprecations('Foo', { foo: 1 }, { 'foo': 'bar' });
    expect(_lastWarning).equals(`Foo property 'foo' was used but has been deprecated. Use 'bar' instead.`);
  });
});

describe('warnMutuallyExclusive', () => {
  beforeEach(() => {
    _lastWarning = undefined;
    setWarningCallback(message => _lastWarning = message);
  });

  afterEach(() => setWarningCallback(undefined));

  it('does not warn when unnecessary', () => {
    warnMutuallyExclusive('Foo', { foo: 1 }, { 'foo': 'bar' });
    expect(_lastWarning).equals(undefined);
  });

  it('can warn on mutual exlusive props', () => {
    warnMutuallyExclusive('Foo', { foo: 1, bar: 1 }, { 'foo': 'bar' } as any);
    expect(_lastWarning).equals(`Foo property 'foo' is mutually exclusive with 'bar'. Use one or the other.`);
  });
});
