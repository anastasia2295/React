import React, { useState } from 'react';
import styled from 'styled-components';

const ProgressContainer = styled.div`
  width: 300px;
  height: 10px;
  background-color: lightgray;
;
`
interface ProgressProps {
  progress: number;
}

const Progress = styled.div<ProgressProps>`
  width: ${({ progress }) => progress}%;
  height: 100%;
  background-color: green;
;
`
const ColorfulProgressBar = ({min, max, onChange}) => {
  const [progress, setProgress] = useState(0);

  const handleRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newProgress = parseInt(event.target.value);
    setProgress(newProgress);
  };

  return (
    <div>
      <input
        min={min}
        max={max}
        value={progress}
        onChange={handleRangeChange}
        
      />
      <ProgressContainer>
        <Progress progress={progress} />
      </ProgressContainer>
    </div>
  );
};

export default ColorfulProgressBar;