package com.kiwi.website.util;

import java.time.ZonedDateTime;

public interface GenerateZonedDateTimeUtil {

    default ZonedDateTime generateZonedDateTimeUtil(){
        return ZonedDateTime.now();
    }
}
