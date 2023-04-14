import React from 'react';
import { RenderResult, screen } from '@testing-library/react';
import renderWithGlobalWrapper from '../../../../utils/testUtils';
import AgentItem from './index';
import mockAgentsData from '../../../../mock/mockAgentsData';

const buildingItem = mockAgentsData.filter((item) => item.availability === 'building')[0];
const idleItem = mockAgentsData.filter((item) => item.availability === 'idle')[0];
const renderBuildingItem = (): RenderResult => renderWithGlobalWrapper(
  <AgentItem
    name={buildingItem.name}
    resources={buildingItem.resources}
    availability={buildingItem.availability}
    ipAddress={buildingItem.ipAddress}
    iconUrl={buildingItem.iconUrl}
  />,
);

const renderIdleItem = (): RenderResult => renderWithGlobalWrapper(
  <AgentItem
    name={idleItem.name}
    resources={idleItem.resources}
    availability={idleItem.availability}
    ipAddress={idleItem.ipAddress}
    iconUrl={idleItem.iconUrl}
  />,
);
describe('AgentItem', () => {
  it('should render agent name', () => {
    renderBuildingItem();
    expect(screen.getByText(buildingItem.name)).toBeInTheDocument();
  });

  it('should render agent availability', () => {
    renderBuildingItem();
    expect(screen.getByText(buildingItem.availability)).toBeInTheDocument();
  });

  it('should render agent ip address', () => {
    renderBuildingItem();
    expect(screen.getByText(buildingItem.ipAddress)).toBeInTheDocument();
  });

  it('should render add resource button', () => {
    renderBuildingItem();
    expect(screen.getByRole('button', { name: '+' })).toBeInTheDocument();
  });

  it('should render deny button in building item', () => {
    renderBuildingItem();
    expect(screen.getByRole('button', { name: /deny/i })).toBeInTheDocument();
  });

  it('should not render deny button in idle item', () => {
    renderIdleItem();
    expect(screen.queryByRole('button', { name: /deny/i })).not.toBeInTheDocument();
  });
});
