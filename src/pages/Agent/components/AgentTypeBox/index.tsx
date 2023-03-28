import React from 'react';

interface AgentTypeBoxProps {
  physicalCount: number,
  virtualCount: number
}

const AgentTypeBox = ({ physicalCount, virtualCount }: AgentTypeBoxProps) => (
  <div>
    <div>
      <div>ALL</div>
      <div>{physicalCount + virtualCount}</div>
    </div>
    <div>
      <div>PHYSICAL</div>
      <div>{physicalCount}</div>
    </div>
    <div>
      <div>VIRTUAL</div>
      <div>{virtualCount}</div>
    </div>
  </div>
);

export default AgentTypeBox;
