
import {ProgressCircle} from "@heroui/react";

export default function Sizes() {
  return (
    <div className="flex items-center gap-6">
      
    
      <ProgressCircle aria-label="Loading" size="md" value={60}>
        <ProgressCircle.Track>
          <ProgressCircle.TrackCircle />
          <ProgressCircle.FillCircle />
        </ProgressCircle.Track>
      </ProgressCircle>

    </div>
  );
}