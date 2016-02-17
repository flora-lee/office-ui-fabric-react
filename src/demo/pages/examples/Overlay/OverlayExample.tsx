import * as React from 'react';
import Overlay from '../../../../components/Overlay/index';
import Link from '../../../../components/Link/index';
import ExampleCard from '../../../components/ExampleCard/index';
import PropertiesTable from '../../../components/PropertiesTable/index';

export default class OverlayExample extends React.Component<any, any> {
  public render() {
    return (
      <div className='OverlayExample'>
        <h1 className='ms-font-xxl'>Overlay</h1>
        <div><Link target='_blank' text='Overlays' url='http://dev.office.com/fabric/components/Overlay' /> are used to render an org chart.</div>

        <PropertiesTable properties={ [] } />

        <h2 className='ms-font-xl'>Examples</h2>

        <ExampleCard title='Overlay'>
          <Overlay />
        </ExampleCard>
      </div>
    );
  }

}