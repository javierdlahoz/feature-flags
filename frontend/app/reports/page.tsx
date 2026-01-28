import { Report } from '@/app/types/types';
import { REPORTS } from '@/app/data/reports';
import { ReportsTable } from '@/app/components/reports/list/ReportsTable';
import { SubmitReportButton } from '@/app/components/reports/common/SubmitReportButton';
export const metadata = {
    title: 'Reports',
};

export default async function ReportsPage() {
    // added some fake reports for demonstration purposes
    const reports: Report[] = REPORTS;

    return (
        <div>
            <h1>Reports</h1>
            {reports.length === 0 ? (
                <p>No reports available.</p>
            ) : (
                <ReportsTable reports={reports} />
            )}

            <SubmitReportButton />
        </div>
    );
}
