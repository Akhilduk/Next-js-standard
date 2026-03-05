export default function TrackingPage({ params }: { params: { id: string } }) {
  return <div><h1 className='text-2xl font-semibold'>Tracking #{params.id}</h1><ol className='list-decimal pl-6'><li>Created</li><li>In Review</li><li>Approved</li></ol></div>;
}
