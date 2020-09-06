package com.kiwi.website.util;

import java.util.UUID;

/**
 * To automatically generate ID's
 */
public interface GenerateUuidUtil {

    default UUID generateUUID() {
        return UUID.randomUUID();
    }
}
