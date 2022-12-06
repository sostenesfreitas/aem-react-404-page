/*
 * ***********************************************************************
 * React App CONFIDENTIAL
 * ___________________
 *
 * Copyright 2022 React App.
 * All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains the property
 * of React App and its suppliers, if any. The intellectual and
 * technical concepts contained herein are proprietary to React App
 * and its suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from React App.
 * ***********************************************************************
 */

package com.reactapp.core.models.impl;

import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.reactapp.core.models.PageSearch;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

@Model(adaptables = {
    SlingHttpServletRequest.class
}, adapters = {
    PageSearch.class,
    ComponentExporter.class
}, resourceType = "reactapp/components/page-search")
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class PageSearchImpl
    implements PageSearch
{

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String textfieldTest1;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String textfieldTest2;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String textfieldTest3;
    @SlingObject
    private Resource resource;

    @Override
    @JsonProperty("textfieldTest1")
    public String getTextfieldTest1() {
        return textfieldTest1;
    }

    @Override
    @JsonProperty("textfieldTest2")
    public String getTextfieldTest2() {
        return textfieldTest2;
    }

    @Override
    @JsonProperty("textfieldTest3")
    public String getTextfieldTest3() {
        return textfieldTest3;
    }

    @Override
    public String getExportedType() {
        return resource.getResourceType();
    }

}
