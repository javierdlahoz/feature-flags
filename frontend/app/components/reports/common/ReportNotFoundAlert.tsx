'use client';

export function ReportNotFoundAlert() {
    return (
        <div className="mb-4 rounded-lg bg-red-100 p-4 text-sm text-red-700" role="alert">
            <div className='font-extrabold'>Report Not Found</div>
            <span className="font-medium">Error:</span> The requested report could not be found.
        </div>
    );
}
