/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'videotest',
                            volume: '0',
                            type: 'video',
                            tag: 'video',
                            rect: ['0', '0', '1920', '1080', 'auto', 'auto'],
                            autoplay: 'autoplay',
                            loop: 'loop',
                            source: [vid+"videotest.mp4"],
                            preload: 'auto'
                        },
                        {
                            id: 'Rectangle',
                            type: 'rect',
                            rect: ['0px', '0px', '1920px', '1080px', 'auto', 'auto'],
                            fill: ["rgba(46,46,46,0.49)"],
                            stroke: [0,"rgba(0,0,0,0.00)","none"]
                        },
                        {
                            id: 'Rectangle2',
                            type: 'rect',
                            rect: ['429px', '156px', '1061px', '383px', 'auto', 'auto'],
                            fill: ["rgba(134,134,134,0.56)"],
                            stroke: [0,"rgba(0, 0, 0, 0)","none"],
                            filter: [0, 0, 1, 1, 0, 0, 0, 196.15384615385, "rgba(0,0,0,0)", 0, 0, 0]
                        },
                        {
                            id: 'logo4_v2',
                            type: 'image',
                            rect: ['22.3%', '14.4%', '55.3%', '35.5%', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"logo4_v2.png",'0px','0px'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(255,255,255,1.00)", 0, 0, 0]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: [undefined, undefined, '100%', '100%'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 6250.667,
                    autoPlay: true,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("Sans%20titre-1_edgeActions.js");
})("EDGE-2422264563");
