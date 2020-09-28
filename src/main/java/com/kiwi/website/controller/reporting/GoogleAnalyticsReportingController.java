package com.kiwi.website.controller.reporting;

import com.google.api.client.googleapis.auth.oauth2.GoogleCredential;
import com.google.api.client.googleapis.javanet.GoogleNetHttpTransport;
import com.google.api.client.http.HttpTransport;
import com.google.api.client.json.JsonFactory;
import com.google.api.client.json.gson.GsonFactory;
import com.google.api.services.analyticsreporting.v4.AnalyticsReporting;
import com.google.api.services.analyticsreporting.v4.AnalyticsReportingScopes;
import com.google.api.services.analyticsreporting.v4.model.*;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.security.GeneralSecurityException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/analytics")
public class GoogleAnalyticsReportingController {

    private static final String APPLICATION_NAME = "Kiwi-Travel Analytics Reporting";
    private static final JsonFactory JSON_FACTORY = GsonFactory.getDefaultInstance();
    private static final File jarFile = new File(GoogleAnalyticsReportingController.class.getProtectionDomain().getCodeSource().getLocation().getPath());
    private static final File KEY_FILE = new File(jarFile.getParentFile().getParent(), "src/main/java/com/kiwi/website/controller/reporting/Kiwi-Travel-e0816208fef3.json");
    private static final String VIEW_ID = "229874627";

    @GetMapping
    public void doGet() {
        try {
            AnalyticsReporting service = initializeAnalyticsReporting();
            GetReportsResponse response = getReport(service);
            printResponse(response);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    /**
     * Initializes an Analytics Reporting API V4 service object.
     *
     * @return An authorized Analytics Reporting API V4 service object.
     * @throws IOException
     * @throws GeneralSecurityException
     */
    private static AnalyticsReporting initializeAnalyticsReporting() throws GeneralSecurityException, IOException {
        HttpTransport httpTransport = GoogleNetHttpTransport.newTrustedTransport();
        GoogleCredential credential = GoogleCredential
                .fromStream(new FileInputStream(KEY_FILE))
                .createScoped(AnalyticsReportingScopes.all());

        // Construct the Analytics Reporting service object.
        return new AnalyticsReporting.Builder(httpTransport, JSON_FACTORY, credential)
                .setApplicationName(APPLICATION_NAME).build();
    }

    /**
     * Queries the Analytics Reporting API V4.
     *
     * @param service An authorized Analytics Reporting API V4 service object.
     * @return GetReportResponse The Analytics Reporting API V4 response.
     * @throws IOException
     */
    private static  GetReportsResponse getReport(AnalyticsReporting service) throws IOException {
        String[] metricsArr = {
                "ga:users",
                "ga:newUsers",
                "ga:sessions",
                "ga:totalEvents",
                "ga:pageviews",
                "ga:pageviewsPerSession",
                "ga:avgSessionDuration"
        };
        String[] dimensionsArr = {
                "ga:eventCategory",
                "ga:country",
                "ga:region",
                "ga:city",
                "ga:latitude",
                "ga:longitude",
                "ga:eventAction",
                "ga:country",
                "ga:source",
        };

        // Create the DateRange object.
        DateRange dateRange = new DateRange();
        dateRange.setStartDate("30daysAgo");
        dateRange.setEndDate("today");

        // Create the Metrics object.
        ArrayList<Metric> metrics = new ArrayList<Metric>();
        for (String item : metricsArr) {
            Metric m = new Metric().setExpression(item).setAlias(item.replace("ga:", ""));
            metrics.add(m);
        }

        ArrayList<Dimension> dimensions = new ArrayList<Dimension>();
        for (String item : dimensionsArr) {
            Dimension d = new Dimension().setName(item);
            dimensions.add(d);
        }

        // Create the ReportRequest object.
        ReportRequest request = new ReportRequest()
                .setViewId(VIEW_ID)
                .setDateRanges(Arrays.asList(dateRange))
                .setMetrics(metrics)
                .setDimensions(dimensions);

        ArrayList<ReportRequest> requests = new ArrayList<ReportRequest>();
        requests.add(request);

        // Create the GetReportsRequest object.
        GetReportsRequest getReport = new GetReportsRequest()
                .setReportRequests(requests);

        // Call the batchGet method.
        GetReportsResponse response = service.reports().batchGet(getReport).execute();

        // Return the response.
        return response;
    }

    /**
     * Parses and prints the Analytics Reporting API V4 response.
     *
     * @param response An Analytics Reporting API V4 response.
     */
    private static void printResponse(GetReportsResponse response) {

        for (Report report : response.getReports()) {
            ColumnHeader header = report.getColumnHeader();
            List<String> dimensionHeaders = header.getDimensions();
            List<MetricHeaderEntry> metricHeaders = header.getMetricHeader().getMetricHeaderEntries();
            List<ReportRow> rows = report.getData().getRows();

            if (rows == null) {
                System.out.println("No data found for " + VIEW_ID);
                return;
            }

            for (ReportRow row : rows) {
                List<String> dimensions = row.getDimensions();
                List<DateRangeValues> metrics = row.getMetrics();

                for (int i = 0; i < dimensionHeaders.size() && i < dimensions.size(); i++) {
                    System.out.println(dimensionHeaders.get(i) + ": " + dimensions.get(i));
                }

                for (int j = 0; j < metrics.size(); j++) {
                    System.out.print("Date Range (" + j + "): ");
                    DateRangeValues values = metrics.get(j);
                    for (int k = 0; k < values.getValues().size() && k < metricHeaders.size(); k++) {
                        System.out.println(metricHeaders.get(k).getName() + ": " + values.getValues().get(k));
                    }
                }
            }
        }
    }
}
