import { describe, expect, it, beforeEach, afterEach } from 'vitest'
import { cleanup, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderWithProviders } from '@inf/utils/testing/test-utils';

import ContentTabs from '@ui/components/content-tabs/ContentTabs.jsx';

const tabsData = [
  {
    label:'Tab One',
    id: 'tab-one-id',
    isSelected: false,
    useIcon: true,
    containerId: 'tab-one-id-container',
    container: (<div className="fam-box">
                  <h3>1 - Elephants</h3>
                </div>)
  },
  {
    label:'Tab Two',
    id: 'tab-two-id',
    isSelected: false,
    useIcon: false,
    containerId: 'tab-two-id-container',
    container: (<div className="fam-box">
                  <h3>2 - Eggs</h3>
                </div>)
  },
  {
    label:'Tab Three',
    id: 'tab-three-id',
    isSelected: false,
    useIcon: false,
    containerId: 'tab-three-id-container',
    container: (<div className="fam-box">
                  <h3>3 - Turtles</h3>
                </div>)
  }
]

describe('Content Tabs Component Suite', async ()=> {
  
  let comp, user;
  let tabsControls, tabsContainers;

  beforeEach(() => {
    user = userEvent.setup();
    comp = renderWithProviders(<ContentTabs TABS_DATA={tabsData} />, {});
    tabsControls = comp.getByTestId('tabsControls');
    tabsContainers = comp.getByTestId('tabsContainers');
  });
  afterEach( cleanup );

  it('Should be Defined', () => {
    expect(comp).toBeDefined();
  });


  it('Should contain more than one tab', async () => {
    let tabs = tabsControls.getElementsByTagName('li');
    let count = tabs.length;
    expect(count).toBeGreaterThan(1);
  });

  it('Should contain same number of containers as tabs', async () => {
    let tabs = tabsControls.getElementsByTagName('button');
    //let containers = tabsContainers.getElementsByTagName('div');
    let containers = tabsContainers.querySelectorAll('.fam-content__tabs-container');
    expect(containers.length).toEqual(tabs.length)
  });  

  it('Should have all tabs with labels', () => {
    let count = 0;
    let tabs = tabsControls.getElementsByTagName('button');
    tabs.forEach( (tab) => {
      let boo = tabsData.find( (item) => {
        return String(tab.innerText).includes(item.label)
      });
      if( boo ) count++;   
    });
    expect(count).toEqual(tabsData.length);
  });

  it('Should have all containers with content', () => {
    let containers = tabsContainers.querySelectorAll('.fam-content__tabs-container');
    containers.forEach( (content) => {
      expect(content.innerText).not.toEqual('')   
    });
  });


});
