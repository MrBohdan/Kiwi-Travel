package com.demo.website.util;

import java.time.ZonedDateTime;

public interface GenerateZonedDateTimeUtil {

    default ZonedDateTime generateZonedDateTimeUtil(){
        return ZonedDateTime.now();
    }
}
