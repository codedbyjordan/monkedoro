type CircularProgressBarProps = {
  percentage: number;
  size?: number;
  strokeWidth?: number;
};

export function CircularProgressBar(props: CircularProgressBarProps) {
  const size = props.size ?? 200;
  const strokeWidth = props.strokeWidth ?? 10;

  const radius = (size - strokeWidth) / 2; // Adjust radius based on stroke width
  const circumference = 2 * Math.PI * radius;

  return (
    <div class="relative" style={{ width: `${size}px`, height: `${size}px` }}>
      <svg class="w-full h-full" viewBox={`0 0 ${size} ${size}`}>
        {/* Background Circle */}
        <circle
          class="text-gray-200 stroke-current"
          stroke-width={strokeWidth}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
        ></circle>
        {/* Foreground Circle */}
        <circle
          class="text-neutral-500 transition-[stroke-dashoffset_0.35s] rotate-90 origin-center stroke-current"
          stroke-width={strokeWidth}
          stroke-linecap="round"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke-dasharray={`${circumference}`}
          stroke-dashoffset={`${
            circumference - (props.percentage / 100) * circumference
          }`}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        ></circle>
      </svg>
    </div>
  );
}
