report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\backstop_default_Nendo_Viewpage_0_document_0_phone.png",
        "test": "..\\bitmaps_test\\20210128-231232\\backstop_default_Nendo_Viewpage_0_document_0_phone.png",
        "selector": "document",
        "fileName": "backstop_default_Nendo_Viewpage_0_document_0_phone.png",
        "label": "Nendo Viewpage",
        "misMatchThreshold": 0.1,
        "url": "http://localhost:3000/nendos",
        "expect": 0,
        "viewportLabel": "phone",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "1.38",
          "analysisTime": 12
        },
        "diffImage": "..\\bitmaps_test\\20210128-231232\\failed_diff_backstop_default_Nendo_Viewpage_0_document_0_phone.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\backstop_default_Nendo_Viewpage_0_document_1_tablet.png",
        "test": "..\\bitmaps_test\\20210128-231232\\backstop_default_Nendo_Viewpage_0_document_1_tablet.png",
        "selector": "document",
        "fileName": "backstop_default_Nendo_Viewpage_0_document_1_tablet.png",
        "label": "Nendo Viewpage",
        "misMatchThreshold": 0.1,
        "url": "http://localhost:3000/nendos",
        "expect": 0,
        "viewportLabel": "tablet",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.23",
          "analysisTime": 24
        },
        "diffImage": "..\\bitmaps_test\\20210128-231232\\failed_diff_backstop_default_Nendo_Viewpage_0_document_1_tablet.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\backstop_default_BackstopJS_Homepage_0_document_0_phone.png",
        "test": "..\\bitmaps_test\\20210128-231232\\backstop_default_BackstopJS_Homepage_0_document_0_phone.png",
        "selector": "document",
        "fileName": "backstop_default_BackstopJS_Homepage_0_document_0_phone.png",
        "label": "BackstopJS Homepage",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "https://garris.github.io/BackstopJS/",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "phone",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00"
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\backstop_default_BackstopJS_Homepage_0_document_1_tablet.png",
        "test": "..\\bitmaps_test\\20210128-231232\\backstop_default_BackstopJS_Homepage_0_document_1_tablet.png",
        "selector": "document",
        "fileName": "backstop_default_BackstopJS_Homepage_0_document_1_tablet.png",
        "label": "BackstopJS Homepage",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "https://garris.github.io/BackstopJS/",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "tablet",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00"
        }
      },
      "status": "pass"
    }
  ],
  "id": "backstop_default"
});