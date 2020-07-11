package com.demo.website.util;

import java.time.ZonedDateTime;

public interface TimeWithTimeZoneUtil {

    default ZonedDateTime timeWithTimeZoneUtil(){
        return ZonedDateTime.now();
    }
}
