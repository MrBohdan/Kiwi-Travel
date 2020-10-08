package com.kiwi.website.controller.reporting;

import com.google.api.client.googleapis.auth.oauth2.GoogleCredential;
import com.google.api.client.googleapis.javanet.GoogleNetHttpTransport;
import com.google.api.client.http.HttpTransport;
import com.google.api.client.json.JsonFactory;
import com.google.api.client.json.gson.GsonFactory;
import com.google.api.services.analyticsreporting.v4.AnalyticsReporting;
import com.google.api.services.analyticsreporting.v4.AnalyticsReportingScopes;
import com.google.api.services.analyticsreporting.v4.model.*;
import com.kiwi.website.context.AppContext;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.security.GeneralSecurityException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.logging.Logger;

@RestController
@RequestMapping("api/v1.0/analytics/")
public class GoogleAnalyticsReportingController {

    private final static Logger LOGGER = Logger.getLogger(GoogleAnalyticsReportingController.class.getName());

    private static final String APPLICATION_NAME = "Kiwi-Travel Analytics Reporting";
    private static final JsonFactory JSON_FACTORY = GsonFactory.getDefaultInstance();
    private static final String VIEW_ID = "229874627";
    private static String START_DATE_RANGE;
    private static String END_DATE_RANGE;
    public static File KEY_FILE = AppContext.applicationContext.getBean("jsonFile", File.class);

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

    @GetMapping(value = "/get/SessionsByDevice") // Map ONLY GET Requests
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public @ResponseBody
    GetReportsResponse doGetSessionsByDevice(
            @RequestParam(name = "startDateRange", defaultValue = "30daysAgo") String startDateRange,
            @RequestParam(name = "endDateRange", defaultValue = "today") String endDateRange
    ) {
        START_DATE_RANGE = startDateRange;
        END_DATE_RANGE = endDateRange;

        GetReportsResponse response = null;
        try {
            AnalyticsReporting service = initializeAnalyticsReporting();
            response = getReportSessionsByDevice(service);
//            printResponse(response);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return response;
    }

    @GetMapping(value = "/get/AudienceOverview") // Map ONLY GET Requests
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public @ResponseBody
    GetReportsResponse doGetAudienceOverview(
            @RequestParam(name = "startDateRange", defaultValue = "30daysAgo") String startDateRange,
            @RequestParam(name = "endDateRange", defaultValue = "today") String endDateRange
    ) {
        START_DATE_RANGE = startDateRange;
        END_DATE_RANGE = endDateRange;
        GetReportsResponse response = null;
        try {
            AnalyticsReporting service = initializeAnalyticsReporting();
            response = getReportAudienceOverview(service);
//            printResponse(response);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return response;
    }

    @GetMapping(value = "/get/Sessions") // Map ONLY GET Requests
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public @ResponseBody
    GetReportsResponse doGetSessions(
            @RequestParam(name = "startDateRange", defaultValue = "30daysAgo") String startDateRange,
            @RequestParam(name = "endDateRange", defaultValue = "today") String endDateRange
    ) {
        START_DATE_RANGE = startDateRange;
        END_DATE_RANGE = endDateRange;
        GetReportsResponse response = null;
        try {
            AnalyticsReporting service = initializeAnalyticsReporting();
            response = getReportSessions(service);
//            printResponse(response);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return response;
    }

    @GetMapping(value = "/get/SessionDuration") // Map ONLY GET Requests
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public @ResponseBody
    GetReportsResponse doGetSessionDuration(
            @RequestParam(name = "startDateRange", defaultValue = "30daysAgo") String startDateRange,
            @RequestParam(name = "endDateRange", defaultValue = "today") String endDateRange
    ) {
        START_DATE_RANGE = startDateRange;
        END_DATE_RANGE = endDateRange;
        GetReportsResponse response = null;
        try {
            AnalyticsReporting service = initializeAnalyticsReporting();
            response = getReportSessionDuration(service);
//            printResponse(response);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return response;
    }


    @GetMapping(value = "/get/NewVsReturningVisitors") // Map ONLY GET Requests
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public @ResponseBody
    GetReportsResponse doGetNewVsReturningVisitors(
            @RequestParam(name = "startDateRange", defaultValue = "30daysAgo") String startDateRange,
            @RequestParam(name = "endDateRange", defaultValue = "today") String endDateRange
    ) {
        START_DATE_RANGE = startDateRange;
        END_DATE_RANGE = endDateRange;
        GetReportsResponse response = null;
        try {
            AnalyticsReporting service = initializeAnalyticsReporting();
            response = getReportNewVsReturningVisitors(service);
//            printResponse(response);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return response;
    }


    @GetMapping(value = "/get/GeoNetwork") // Map ONLY GET Requests
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public @ResponseBody
    GetReportsResponse doGetGeoNetwork(
            @RequestParam(name = "startDateRange", defaultValue = "30daysAgo") String startDateRange,
            @RequestParam(name = "endDateRange", defaultValue = "today") String endDateRange
    ) {
        START_DATE_RANGE = startDateRange;
        END_DATE_RANGE = endDateRange;
        GetReportsResponse response = null;
        try {
            AnalyticsReporting service = initializeAnalyticsReporting();
            response = getReportGeoNetwork(service);
//            printResponse(response);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return response;
    }

    /**
     * Queries the Analytics Reporting API V4.
     *
     * @param service An authorized Analytics Reporting API V4 service object.
     * @return GetReportResponse The Analytics Reporting API V4 response.
     * @throws IOException
     */
    private static GetReportsResponse getReportSessionsByDevice(AnalyticsReporting service) throws IOException {
        // Create the DateRange object.
        DateRange dateRange = new DateRange();
        dateRange.setStartDate(START_DATE_RANGE);
        dateRange.setEndDate(END_DATE_RANGE);

        String[] dimensionsArr = {
                "ga:deviceCategory"
        };

        ArrayList<Dimension> dimensions = new ArrayList<>();
        for (String item : dimensionsArr) {
            Dimension d = new Dimension().setName(item);
            dimensions.add(d);
        }

        // Create the ReportRequest object.
        ReportRequest request = new ReportRequest()
                .setViewId(VIEW_ID)
                .setDateRanges(Arrays.asList(dateRange))
                .setDimensions(dimensions)
                .setPageSize(10000);

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


    private GetReportsResponse getReportAudienceOverview(AnalyticsReporting service) throws IOException {
        // Create the DateRange object.
        DateRange dateRange = new DateRange();
        dateRange.setStartDate(START_DATE_RANGE);
        dateRange.setEndDate(END_DATE_RANGE);

        // Create the Metrics object.
        String[] metricsArr = {
                "ga:users",
        };

        ArrayList<Metric> metrics = new ArrayList<>();
        for (String item : metricsArr) {
            Metric m = new Metric()
                    .setExpression(item)
                    .setAlias(item.replace("ga:", ""));
            metrics.add(m);
        }

        String[] dimensionsArr = {
                "ga:date"
        };

        ArrayList<Dimension> dimensions = new ArrayList<>();
        for (String item : dimensionsArr) {
            Dimension d = new Dimension().setName(item);
            dimensions.add(d);
        }

        // Create the ReportRequest object.
        ReportRequest request = new ReportRequest()
                .setViewId(VIEW_ID)
                .setDateRanges(Arrays.asList(dateRange))
                .setMetrics(metrics)
                .setDimensions(dimensions)
                .setPageSize(10000);

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

    private GetReportsResponse getReportSessions(AnalyticsReporting service) throws IOException {
        // Create the DateRange object.
        DateRange dateRange = new DateRange();
        dateRange.setStartDate(START_DATE_RANGE);
        dateRange.setEndDate(END_DATE_RANGE);

        // Create the Metrics object.
        String[] metricsArr = {
                "ga:sessions",
        };

        ArrayList<Metric> metrics = new ArrayList<>();
        for (String item : metricsArr) {
            Metric m = new Metric()
                    .setExpression(item)
                    .setAlias(item.replace("ga:", ""));
            metrics.add(m);
        }

        String[] dimensionsArr = {
                "ga:date"
        };

        ArrayList<Dimension> dimensions = new ArrayList<>();
        for (String item : dimensionsArr) {
            Dimension d = new Dimension().setName(item);
            dimensions.add(d);
        }

        // Create the ReportRequest object.
        ReportRequest request = new ReportRequest()
                .setViewId(VIEW_ID)
                .setDateRanges(Arrays.asList(dateRange))
                .setMetrics(metrics)
                .setDimensions(dimensions)
                .setPageSize(10000);

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

    private GetReportsResponse getReportSessionDuration(AnalyticsReporting service) throws IOException {
        // Create the DateRange object.
        DateRange dateRange = new DateRange();
        dateRange.setStartDate(START_DATE_RANGE);
        dateRange.setEndDate(END_DATE_RANGE);

        // Create the Metrics object.
        String[] metricsArr = {
                "ga:avgSessionDuration"
        };

        ArrayList<Metric> metrics = new ArrayList<>();
        for (String item : metricsArr) {
            Metric m = new Metric()
                    .setExpression(item)
                    .setAlias(item.replace("ga:", ""));
            metrics.add(m);
        }

        String[] dimensionsArr = {
                "ga:date"
        };

        ArrayList<Dimension> dimensions = new ArrayList<>();
        for (String item : dimensionsArr) {
            Dimension d = new Dimension().setName(item);
            dimensions.add(d);
        }

        // Create the ReportRequest object.
        ReportRequest request = new ReportRequest()
                .setViewId(VIEW_ID)
                .setDateRanges(Arrays.asList(dateRange))
                .setMetrics(metrics)
                .setDimensions(dimensions)
                .setPageSize(10000);

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


    private GetReportsResponse getReportNewVsReturningVisitors(AnalyticsReporting service) throws IOException {
        // Create the DateRange object.
        DateRange dateRange = new DateRange();
        dateRange.setStartDate(START_DATE_RANGE);
        dateRange.setEndDate(END_DATE_RANGE);

        // Create the Metrics object.
        String[] metricsArr = {
                "ga:users",
        };

        ArrayList<Metric> metrics = new ArrayList<>();
        for (String item : metricsArr) {
            Metric m = new Metric()
                    .setExpression(item)
                    .setAlias(item.replace("ga:", ""));
            metrics.add(m);
        }

        String[] dimensionsArr = {
                "ga:userType"
        };

        ArrayList<Dimension> dimensions = new ArrayList<>();
        for (String item : dimensionsArr) {
            Dimension d = new Dimension().setName(item);
            dimensions.add(d);
        }

        // Create the ReportRequest object.
        ReportRequest request = new ReportRequest()
                .setViewId(VIEW_ID)
                .setDateRanges(Arrays.asList(dateRange))
                .setMetrics(metrics)
                .setDimensions(dimensions)
                .setPageSize(10000);

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

    private GetReportsResponse getReportGeoNetwork(AnalyticsReporting service) throws IOException {
        // Create the DateRange object.
        DateRange dateRange = new DateRange();
        dateRange.setStartDate(START_DATE_RANGE);
        dateRange.setEndDate(END_DATE_RANGE);

        // Create the Metrics object.
        String[] metricsArr = {
        };

        ArrayList<Metric> metrics = new ArrayList<>();
        for (String item : metricsArr) {
            Metric m = new Metric()
                    .setExpression(item)
                    .setAlias(item.replace("ga:", ""));
            metrics.add(m);
        }

        String[] dimensionsArr = {
                "ga:continent",
                "ga:subContinent",
                "ga:country",
                "ga:region",
                "ga:city",
                "ga:countryIsoCode",
                "ga:longitude",
                "ga:latitude",
//              "ga:date"
        };

        ArrayList<Dimension> dimensions = new ArrayList<>();
        for (String item : dimensionsArr) {
            Dimension d = new Dimension().setName(item);
            dimensions.add(d);
        }

        // Create the ReportRequest object.
        ReportRequest request = new ReportRequest()
                .setViewId(VIEW_ID)
                .setDateRanges(Arrays.asList(dateRange))
                .setMetrics(metrics)
                .setDimensions(dimensions)
                .setPageSize(10000);

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
