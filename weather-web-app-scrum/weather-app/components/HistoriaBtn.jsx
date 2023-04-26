import Link from 'next/link';

function HistoriaBtn() {
  return (
    <div>
      <Link href="/historia">
        <button className="border-b-2 border-transparent text-white transition-all duration-300 ease-in-out hover:border-blue-500 mx-1">
          Historia data
        </button>
      </Link>
    </div>
  );
}

export default HistoriaBtn;
