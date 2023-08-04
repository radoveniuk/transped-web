import ReactSkeleton, { SkeletonProps } from 'react-loading-skeleton';

export default function Skeleton (props: SkeletonProps) {
  return <ReactSkeleton {...props} baseColor="#f3eee8" highlightColor="#cccccc" />;
};