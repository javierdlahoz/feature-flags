<?php

namespace App\Enums;

enum FeaturesEnum: string
{
    case CreateReport = 'createReport';
    case ViewReport = 'viewReport';
    case UpdateReport = 'updateReport';
    case ReportCustomerView = 'reportCustomerView';
    case BackToReportListView = 'backToReportListView';
    case ReportTitleView = 'reportTitleView';
}
