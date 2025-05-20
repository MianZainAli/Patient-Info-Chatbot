const Dashboard = () => {
  return (
    <>
      <div className="col-xl-9 col-lg-8 col-md-7 mt-4 mt-sm-0">
        <h5 className="mb-0">Dashboard</h5>
        <div className="row">
          <div className="col-xl-3 col-lg-6 mt-4">
            <div className="card shadow border-0 p-4">
              <div className="d-flex justify-content-between mb-3">
                <h6 className="align-items-center mb-0">
                  Appointment{" "}
                  <span className="badge rounded-pill bg-soft-primary ms-1">
                    +15%
                  </span>
                </h6>
                <p className="mb-0 text-muted">220+ Week</p>
              </div>
              <div id="chart-1" style={{ minHeight: 90 }}>
                <div
                  id="apexchartskd9rfg82"
                  className="apexcharts-canvas apexchartskd9rfg82 apexcharts-theme-light"
                  style={{ width: 154, height: 90 }}
                >
                  <svg
                    id="SvgjsSvg1196"
                    width={154}
                    height={90}
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    
                    className="apexcharts-svg"
                    transform="translate(0, 0)"
                    style={{ background: "transparent" }}
                  >
                    <g
                      id="SvgjsG1198"
                      className="apexcharts-inner apexcharts-graphical"
                      transform="translate(0, 0)"
                    >
                      <defs id="SvgjsDefs1197">
                        <clipPath id="gridRectMaskkd9rfg82">
                          <rect
                            id="SvgjsRect1203"
                            width={161}
                            height={93}
                            x="-3.5"
                            y="-1.5"
                            rx={0}
                            ry={0}
                            opacity={1}
                            strokeWidth={0}
                            stroke="none"
                            strokeDasharray={0}
                            fill="#fff"
                          />
                        </clipPath>
                        <clipPath id="forecastMaskkd9rfg82" />
                        <clipPath id="nonForecastMaskkd9rfg82" />
                        <clipPath id="gridRectMarkerMaskkd9rfg82">
                          <rect
                            id="SvgjsRect1204"
                            width={158}
                            height={94}
                            x={-2}
                            y={-2}
                            rx={0}
                            ry={0}
                            opacity={1}
                            strokeWidth={0}
                            stroke="none"
                            strokeDasharray={0}
                            fill="#fff"
                          />
                        </clipPath>
                        <linearGradient
                          id="SvgjsLinearGradient1209"
                          x1={0}
                          y1={0}
                          x2={0}
                          y2={1}
                        >
                          <stop
                            id="SvgjsStop1210"
                            stopOpacity="0.45"
                            stopColor="rgba(57,108,240,0.45)"
                            offset="0.2"
                          />
                          <stop
                            id="SvgjsStop1211"
                            stopOpacity="0.05"
                            stopColor="rgba(255,255,255,0.05)"
                            offset={1}
                          />
                          <stop
                            id="SvgjsStop1212"
                            stopOpacity="0.05"
                            stopColor="rgba(255,255,255,0.05)"
                            offset={1}
                          />
                          <stop
                            id="SvgjsStop1213"
                            stopOpacity="0.45"
                            stopColor="rgba(57,108,240,0.45)"
                            offset={1}
                          />
                        </linearGradient>
                      </defs>
                      <line
                        id="SvgjsLine1202"
                        x1={0}
                        y1={0}
                        x2={0}
                        y2={90}
                        stroke="#b6b6b6"
                        strokeDasharray={3}
                        strokeLinecap="butt"
                        className="apexcharts-xcrosshairs"
                        x={0}
                        y={0}
                        width={1}
                        height={90}
                        fill="#b1b9c4"
                        filter="none"
                        fillOpacity="0.9"
                        strokeWidth={1}
                      />
                      <g
                        id="SvgjsG1216"
                        className="apexcharts-xaxis"
                        transform="translate(0, 0)"
                      >
                        <g
                          id="SvgjsG1217"
                          className="apexcharts-xaxis-texts-g"
                          transform="translate(0, -4)"
                        />
                      </g>
                      <g id="SvgjsG1226" className="apexcharts-grid">
                        <g
                          id="SvgjsG1227"
                          className="apexcharts-gridlines-horizontal"
                          style={{ display: "none" }}
                        >
                          <line
                            id="SvgjsLine1229"
                            x1={0}
                            y1={0}
                            x2={154}
                            y2={0}
                            stroke="#e0e0e0"
                            strokeDasharray={0}
                            strokeLinecap="butt"
                            className="apexcharts-gridline"
                          />
                          <line
                            id="SvgjsLine1230"
                            x1={0}
                            y1={15}
                            x2={154}
                            y2={15}
                            stroke="#e0e0e0"
                            strokeDasharray={0}
                            strokeLinecap="butt"
                            className="apexcharts-gridline"
                          />
                          <line
                            id="SvgjsLine1231"
                            x1={0}
                            y1={30}
                            x2={154}
                            y2={30}
                            stroke="#e0e0e0"
                            strokeDasharray={0}
                            strokeLinecap="butt"
                            className="apexcharts-gridline"
                          />
                          <line
                            id="SvgjsLine1232"
                            x1={0}
                            y1={45}
                            x2={154}
                            y2={45}
                            stroke="#e0e0e0"
                            strokeDasharray={0}
                            strokeLinecap="butt"
                            className="apexcharts-gridline"
                          />
                          <line
                            id="SvgjsLine1233"
                            x1={0}
                            y1={60}
                            x2={154}
                            y2={60}
                            stroke="#e0e0e0"
                            strokeDasharray={0}
                            strokeLinecap="butt"
                            className="apexcharts-gridline"
                          />
                          <line
                            id="SvgjsLine1234"
                            x1={0}
                            y1={75}
                            x2={154}
                            y2={75}
                            stroke="#e0e0e0"
                            strokeDasharray={0}
                            strokeLinecap="butt"
                            className="apexcharts-gridline"
                          />
                          <line
                            id="SvgjsLine1235"
                            x1={0}
                            y1={90}
                            x2={154}
                            y2={90}
                            stroke="#e0e0e0"
                            strokeDasharray={0}
                            strokeLinecap="butt"
                            className="apexcharts-gridline"
                          />
                        </g>
                        <g
                          id="SvgjsG1228"
                          className="apexcharts-gridlines-vertical"
                          style={{ display: "none" }}
                        />
                        <line
                          id="SvgjsLine1237"
                          x1={0}
                          y1={90}
                          x2={154}
                          y2={90}
                          stroke="transparent"
                          strokeDasharray={0}
                          strokeLinecap="butt"
                        />
                        <line
                          id="SvgjsLine1236"
                          x1={0}
                          y1={1}
                          x2={0}
                          y2={90}
                          stroke="transparent"
                          strokeDasharray={0}
                          strokeLinecap="butt"
                        />
                      </g>
                      <g
                        id="SvgjsG1205"
                        className="apexcharts-area-series apexcharts-plot-series"
                      >
                        <g
                          id="SvgjsG1206"
                          className="apexcharts-series"
                          seriesname="series-1"
                          
                          rel={1}
                          
                        >
                          <path
                            id="SvgjsPath1214"
                            d="M 0 90L 0 75C 8.983333333333333 75 16.683333333333337 37.5 25.666666666666668 37.5C 34.65 37.5 42.35 45 51.333333333333336 45C 60.31666666666667 45 68.01666666666667 9 77 9C 85.98333333333333 9 93.68333333333334 52.5 102.66666666666667 52.5C 111.65 52.5 119.35000000000001 67.5 128.33333333333334 67.5C 137.31666666666666 67.5 145.01666666666668 52.5 154 52.5C 154 52.5 154 52.5 154 90M 154 52.5z"
                            fill="url(#SvgjsLinearGradient1209)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            strokeLinecap="butt"
                            strokeWidth={0}
                            strokeDasharray={0}
                            className="apexcharts-area"
                            index={0}
                            clipPath="url(#gridRectMaskkd9rfg82)"
                            pathto="M 0 90L 0 75C 8.983333333333333 75 16.683333333333337 37.5 25.666666666666668 37.5C 34.65 37.5 42.35 45 51.333333333333336 45C 60.31666666666667 45 68.01666666666667 9 77 9C 85.98333333333333 9 93.68333333333334 52.5 102.66666666666667 52.5C 111.65 52.5 119.35000000000001 67.5 128.33333333333334 67.5C 137.31666666666666 67.5 145.01666666666668 52.5 154 52.5C 154 52.5 154 52.5 154 90M 154 52.5z"
                            pathfrom="M -1 105L -1 105L 25.666666666666668 105L 51.333333333333336 105L 77 105L 102.66666666666667 105L 128.33333333333334 105L 154 105"
                          />
                          <path
                            id="SvgjsPath1215"
                            d="M 0 75C 8.983333333333333 75 16.683333333333337 37.5 25.666666666666668 37.5C 34.65 37.5 42.35 45 51.333333333333336 45C 60.31666666666667 45 68.01666666666667 9 77 9C 85.98333333333333 9 93.68333333333334 52.5 102.66666666666667 52.5C 111.65 52.5 119.35000000000001 67.5 128.33333333333334 67.5C 137.31666666666666 67.5 145.01666666666668 52.5 154 52.5"
                            fill="none"
                            fillOpacity={1}
                            stroke="#396cf0"
                            strokeOpacity={1}
                            strokeLinecap="butt"
                            strokeWidth={3}
                            strokeDasharray={0}
                            className="apexcharts-area"
                            index={0}
                            clipPath="url(#gridRectMaskkd9rfg82)"
                            pathto="M 0 75C 8.983333333333333 75 16.683333333333337 37.5 25.666666666666668 37.5C 34.65 37.5 42.35 45 51.333333333333336 45C 60.31666666666667 45 68.01666666666667 9 77 9C 85.98333333333333 9 93.68333333333334 52.5 102.66666666666667 52.5C 111.65 52.5 119.35000000000001 67.5 128.33333333333334 67.5C 137.31666666666666 67.5 145.01666666666668 52.5 154 52.5"
                            pathfrom="M -1 105L -1 105L 25.666666666666668 105L 51.333333333333336 105L 77 105L 102.66666666666667 105L 128.33333333333334 105L 154 105"
                          />
                          <g
                            id="SvgjsG1207"
                            className="apexcharts-series-markers-wrap"
                            
                          >
                            <g className="apexcharts-series-markers">
                              <circle
                                id="SvgjsCircle1243"
                                r={0}
                                cx={0}
                                cy={0}
                                className="apexcharts-marker w03vpmni1 no-pointer-events"
                                stroke="#ffffff"
                                fill="#396cf0"
                                fillOpacity={1}
                                strokeWidth={2}
                                strokeOpacity="0.9"
                                default-marker-size={0}
                              />
                            </g>
                          </g>
                        </g>
                        <g
                          id="SvgjsG1208"
                          className="apexcharts-datalabels"
                          
                        />
                      </g>
                      <line
                        id="SvgjsLine1238"
                        x1={0}
                        y1={0}
                        x2={154}
                        y2={0}
                        stroke="#b6b6b6"
                        strokeDasharray={0}
                        strokeWidth={1}
                        strokeLinecap="butt"
                        className="apexcharts-ycrosshairs"
                      />
                      <line
                        id="SvgjsLine1239"
                        x1={0}
                        y1={0}
                        x2={154}
                        y2={0}
                        strokeDasharray={0}
                        strokeWidth={0}
                        strokeLinecap="butt"
                        className="apexcharts-ycrosshairs-hidden"
                      />
                      <g id="SvgjsG1240" className="apexcharts-yaxis-annotations" />
                      <g id="SvgjsG1241" className="apexcharts-xaxis-annotations" />
                      <g id="SvgjsG1242" className="apexcharts-point-annotations" />
                    </g>
                    <rect
                      id="SvgjsRect1201"
                      width={0}
                      height={0}
                      x={0}
                      y={0}
                      rx={0}
                      ry={0}
                      opacity={1}
                      strokeWidth={0}
                      stroke="none"
                      strokeDasharray={0}
                      fill="#fefefe"
                    />
                    <g
                      id="SvgjsG1225"
                      className="apexcharts-yaxis"
                      rel={0}
                      transform="translate(-18, 0)"
                    />
                    <g id="SvgjsG1199" className="apexcharts-annotations" />
                  </svg>
                  <div className="apexcharts-legend" style={{ maxHeight: 45 }} />
                  <div className="apexcharts-tooltip apexcharts-theme-light">
                    <div
                      className="apexcharts-tooltip-series-group"
                      style={{ order: 1 }}
                    >
                      <span
                        className="apexcharts-tooltip-marker"
                        style={{ backgroundColor: "rgb(57, 108, 240)" }}
                      />
                      <div
                        className="apexcharts-tooltip-text"
                        style={{
                          fontFamily: "Helvetica, Arial, sans-serif",
                          fontSize: 12
                        }}
                      >
                        <div className="apexcharts-tooltip-y-group">
                          <span className="apexcharts-tooltip-text-y-label" />
                          <span className="apexcharts-tooltip-text-y-value" />
                        </div>
                        <div className="apexcharts-tooltip-goals-group">
                          <span className="apexcharts-tooltip-text-goals-label" />
                          <span className="apexcharts-tooltip-text-goals-value" />
                        </div>
                        <div className="apexcharts-tooltip-z-group">
                          <span className="apexcharts-tooltip-text-z-label" />
                          <span className="apexcharts-tooltip-text-z-value" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light">
                    <div className="apexcharts-yaxistooltip-text" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*end col*/}
          <div className="col-xl-3 col-lg-6 mt-4">
            <div className="card shadow border-0 p-4">
              <div className="d-flex justify-content-between mb-3">
                <h6 className="align-items-center mb-0">
                  Patients{" "}
                  <span className="badge rounded-pill bg-soft-success ms-1">
                    +20%
                  </span>
                </h6>
                <p className="mb-0 text-muted">220+ Week</p>
              </div>
              <div id="chart-2" style={{ minHeight: 90 }}>
                <div
                  id="apexcharts6m6h0wfy"
                  className="apexcharts-canvas apexcharts6m6h0wfy apexcharts-theme-light"
                  style={{ width: 154, height: 90 }}
                >
                  <svg
                    id="SvgjsSvg1245"
                    width={154}
                    height={90}
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    
                    className="apexcharts-svg"
                    transform="translate(0, 0)"
                    style={{ background: "transparent" }}
                  >
                    <g
                      id="SvgjsG1247"
                      className="apexcharts-inner apexcharts-graphical"
                      transform="translate(0, 0)"
                    >
                      <defs id="SvgjsDefs1246">
                        <clipPath id="gridRectMask6m6h0wfy">
                          <rect
                            id="SvgjsRect1252"
                            width={161}
                            height={93}
                            x="-3.5"
                            y="-1.5"
                            rx={0}
                            ry={0}
                            opacity={1}
                            strokeWidth={0}
                            stroke="none"
                            strokeDasharray={0}
                            fill="#fff"
                          />
                        </clipPath>
                        <clipPath id="forecastMask6m6h0wfy" />
                        <clipPath id="nonForecastMask6m6h0wfy" />
                        <clipPath id="gridRectMarkerMask6m6h0wfy">
                          <rect
                            id="SvgjsRect1253"
                            width={158}
                            height={94}
                            x={-2}
                            y={-2}
                            rx={0}
                            ry={0}
                            opacity={1}
                            strokeWidth={0}
                            stroke="none"
                            strokeDasharray={0}
                            fill="#fff"
                          />
                        </clipPath>
                        <linearGradient
                          id="SvgjsLinearGradient1258"
                          x1={0}
                          y1={0}
                          x2={0}
                          y2={1}
                        >
                          <stop
                            id="SvgjsStop1259"
                            stopOpacity="0.45"
                            stopColor="rgba(83,199,151,0.45)"
                            offset="0.2"
                          />
                          <stop
                            id="SvgjsStop1260"
                            stopOpacity="0.05"
                            stopColor="rgba(255,255,255,0.05)"
                            offset={1}
                          />
                          <stop
                            id="SvgjsStop1261"
                            stopOpacity="0.05"
                            stopColor="rgba(255,255,255,0.05)"
                            offset={1}
                          />
                          <stop
                            id="SvgjsStop1262"
                            stopOpacity="0.45"
                            stopColor="rgba(83,199,151,0.45)"
                            offset={1}
                          />
                        </linearGradient>
                      </defs>
                      <line
                        id="SvgjsLine1251"
                        x1={0}
                        y1={0}
                        x2={0}
                        y2={90}
                        stroke="#b6b6b6"
                        strokeDasharray={3}
                        strokeLinecap="butt"
                        className="apexcharts-xcrosshairs"
                        x={0}
                        y={0}
                        width={1}
                        height={90}
                        fill="#b1b9c4"
                        filter="none"
                        fillOpacity="0.9"
                        strokeWidth={1}
                      />
                      <g
                        id="SvgjsG1265"
                        className="apexcharts-xaxis"
                        transform="translate(0, 0)"
                      >
                        <g
                          id="SvgjsG1266"
                          className="apexcharts-xaxis-texts-g"
                          transform="translate(0, -4)"
                        />
                      </g>
                      <g id="SvgjsG1275" className="apexcharts-grid">
                        <g
                          id="SvgjsG1276"
                          className="apexcharts-gridlines-horizontal"
                          style={{ display: "none" }}
                        >
                          <line
                            id="SvgjsLine1278"
                            x1={0}
                            y1={0}
                            x2={154}
                            y2={0}
                            stroke="#e0e0e0"
                            strokeDasharray={0}
                            strokeLinecap="butt"
                            className="apexcharts-gridline"
                          />
                          <line
                            id="SvgjsLine1279"
                            x1={0}
                            y1={18}
                            x2={154}
                            y2={18}
                            stroke="#e0e0e0"
                            strokeDasharray={0}
                            strokeLinecap="butt"
                            className="apexcharts-gridline"
                          />
                          <line
                            id="SvgjsLine1280"
                            x1={0}
                            y1={36}
                            x2={154}
                            y2={36}
                            stroke="#e0e0e0"
                            strokeDasharray={0}
                            strokeLinecap="butt"
                            className="apexcharts-gridline"
                          />
                          <line
                            id="SvgjsLine1281"
                            x1={0}
                            y1={54}
                            x2={154}
                            y2={54}
                            stroke="#e0e0e0"
                            strokeDasharray={0}
                            strokeLinecap="butt"
                            className="apexcharts-gridline"
                          />
                          <line
                            id="SvgjsLine1282"
                            x1={0}
                            y1={72}
                            x2={154}
                            y2={72}
                            stroke="#e0e0e0"
                            strokeDasharray={0}
                            strokeLinecap="butt"
                            className="apexcharts-gridline"
                          />
                          <line
                            id="SvgjsLine1283"
                            x1={0}
                            y1={90}
                            x2={154}
                            y2={90}
                            stroke="#e0e0e0"
                            strokeDasharray={0}
                            strokeLinecap="butt"
                            className="apexcharts-gridline"
                          />
                        </g>
                        <g
                          id="SvgjsG1277"
                          className="apexcharts-gridlines-vertical"
                          style={{ display: "none" }}
                        />
                        <line
                          id="SvgjsLine1285"
                          x1={0}
                          y1={90}
                          x2={154}
                          y2={90}
                          stroke="transparent"
                          strokeDasharray={0}
                          strokeLinecap="butt"
                        />
                        <line
                          id="SvgjsLine1284"
                          x1={0}
                          y1={1}
                          x2={0}
                          y2={90}
                          stroke="transparent"
                          strokeDasharray={0}
                          strokeLinecap="butt"
                        />
                      </g>
                      <g
                        id="SvgjsG1254"
                        className="apexcharts-area-series apexcharts-plot-series"
                      >
                        <g
                          id="SvgjsG1255"
                          className="apexcharts-series"
                          seriesname="series-1"
                          
                          rel={1}
                          
                        >
                          <path
                            id="SvgjsPath1263"
                            d="M 0 90L 0 90C 8.983333333333333 90 16.683333333333337 63 25.666666666666668 63C 34.65 63 42.35 54 51.333333333333336 54C 60.31666666666667 54 68.01666666666667 10.800000000000011 77 10.800000000000011C 85.98333333333333 10.800000000000011 93.68333333333334 27 102.66666666666667 27C 111.65 27 119.35000000000001 37.8 128.33333333333334 37.8C 137.31666666666666 37.8 145.01666666666668 81 154 81C 154 81 154 81 154 90M 154 81z"
                            fill="url(#SvgjsLinearGradient1258)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            strokeLinecap="butt"
                            strokeWidth={0}
                            strokeDasharray={0}
                            className="apexcharts-area"
                            index={0}
                            clipPath="url(#gridRectMask6m6h0wfy)"
                            pathto="M 0 90L 0 90C 8.983333333333333 90 16.683333333333337 63 25.666666666666668 63C 34.65 63 42.35 54 51.333333333333336 54C 60.31666666666667 54 68.01666666666667 10.800000000000011 77 10.800000000000011C 85.98333333333333 10.800000000000011 93.68333333333334 27 102.66666666666667 27C 111.65 27 119.35000000000001 37.8 128.33333333333334 37.8C 137.31666666666666 37.8 145.01666666666668 81 154 81C 154 81 154 81 154 90M 154 81z"
                            pathfrom="M -1 108L -1 108L 25.666666666666668 108L 51.333333333333336 108L 77 108L 102.66666666666667 108L 128.33333333333334 108L 154 108"
                          />
                          <path
                            id="SvgjsPath1264"
                            d="M 0 90C 8.983333333333333 90 16.683333333333337 63 25.666666666666668 63C 34.65 63 42.35 54 51.333333333333336 54C 60.31666666666667 54 68.01666666666667 10.800000000000011 77 10.800000000000011C 85.98333333333333 10.800000000000011 93.68333333333334 27 102.66666666666667 27C 111.65 27 119.35000000000001 37.8 128.33333333333334 37.8C 137.31666666666666 37.8 145.01666666666668 81 154 81"
                            fill="none"
                            fillOpacity={1}
                            stroke="#53c797"
                            strokeOpacity={1}
                            strokeLinecap="butt"
                            strokeWidth={3}
                            strokeDasharray={0}
                            className="apexcharts-area"
                            index={0}
                            clipPath="url(#gridRectMask6m6h0wfy)"
                            pathto="M 0 90C 8.983333333333333 90 16.683333333333337 63 25.666666666666668 63C 34.65 63 42.35 54 51.333333333333336 54C 60.31666666666667 54 68.01666666666667 10.800000000000011 77 10.800000000000011C 85.98333333333333 10.800000000000011 93.68333333333334 27 102.66666666666667 27C 111.65 27 119.35000000000001 37.8 128.33333333333334 37.8C 137.31666666666666 37.8 145.01666666666668 81 154 81"
                            pathfrom="M -1 108L -1 108L 25.666666666666668 108L 51.333333333333336 108L 77 108L 102.66666666666667 108L 128.33333333333334 108L 154 108"
                          />
                          <g
                            id="SvgjsG1256"
                            className="apexcharts-series-markers-wrap"
                            
                          >
                            <g className="apexcharts-series-markers">
                              <circle
                                id="SvgjsCircle1291"
                                r={0}
                                cx={0}
                                cy={0}
                                className="apexcharts-marker wpn3b6isa no-pointer-events"
                                stroke="#ffffff"
                                fill="#53c797"
                                fillOpacity={1}
                                strokeWidth={2}
                                strokeOpacity="0.9"
                                default-marker-size={0}
                              />
                            </g>
                          </g>
                        </g>
                        <g
                          id="SvgjsG1257"
                          className="apexcharts-datalabels"
                          
                        />
                      </g>
                      <line
                        id="SvgjsLine1286"
                        x1={0}
                        y1={0}
                        x2={154}
                        y2={0}
                        stroke="#b6b6b6"
                        strokeDasharray={0}
                        strokeWidth={1}
                        strokeLinecap="butt"
                        className="apexcharts-ycrosshairs"
                      />
                      <line
                        id="SvgjsLine1287"
                        x1={0}
                        y1={0}
                        x2={154}
                        y2={0}
                        strokeDasharray={0}
                        strokeWidth={0}
                        strokeLinecap="butt"
                        className="apexcharts-ycrosshairs-hidden"
                      />
                      <g id="SvgjsG1288" className="apexcharts-yaxis-annotations" />
                      <g id="SvgjsG1289" className="apexcharts-xaxis-annotations" />
                      <g id="SvgjsG1290" className="apexcharts-point-annotations" />
                    </g>
                    <rect
                      id="SvgjsRect1250"
                      width={0}
                      height={0}
                      x={0}
                      y={0}
                      rx={0}
                      ry={0}
                      opacity={1}
                      strokeWidth={0}
                      stroke="none"
                      strokeDasharray={0}
                      fill="#fefefe"
                    />
                    <g
                      id="SvgjsG1274"
                      className="apexcharts-yaxis"
                      rel={0}
                      transform="translate(-18, 0)"
                    />
                    <g id="SvgjsG1248" className="apexcharts-annotations" />
                  </svg>
                  <div className="apexcharts-legend" style={{ maxHeight: 45 }} />
                  <div className="apexcharts-tooltip apexcharts-theme-light">
                    <div
                      className="apexcharts-tooltip-series-group"
                      style={{ order: 1 }}
                    >
                      <span
                        className="apexcharts-tooltip-marker"
                        style={{ backgroundColor: "rgb(83, 199, 151)" }}
                      />
                      <div
                        className="apexcharts-tooltip-text"
                        style={{
                          fontFamily: "Helvetica, Arial, sans-serif",
                          fontSize: 12
                        }}
                      >
                        <div className="apexcharts-tooltip-y-group">
                          <span className="apexcharts-tooltip-text-y-label" />
                          <span className="apexcharts-tooltip-text-y-value" />
                        </div>
                        <div className="apexcharts-tooltip-goals-group">
                          <span className="apexcharts-tooltip-text-goals-label" />
                          <span className="apexcharts-tooltip-text-goals-value" />
                        </div>
                        <div className="apexcharts-tooltip-z-group">
                          <span className="apexcharts-tooltip-text-z-label" />
                          <span className="apexcharts-tooltip-text-z-value" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light">
                    <div className="apexcharts-yaxistooltip-text" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*end col*/}
          <div className="col-xl-3 col-lg-6 mt-4">
            <div className="card shadow border-0 p-4">
              <div className="d-flex justify-content-between mb-3">
                <h6 className="align-items-center mb-0">
                  Urgent{" "}
                  <span className="badge rounded-pill bg-soft-warning ms-1">+5%</span>
                </h6>
                <p className="mb-0 text-muted">220+ Week</p>
              </div>
              <div id="chart-3" style={{ minHeight: 90 }}>
                <div
                  id="apexchartsftyyhcmyi"
                  className="apexcharts-canvas apexchartsftyyhcmyi apexcharts-theme-light"
                  style={{ width: 154, height: 90 }}
                >
                  <svg
                    id="SvgjsSvg1293"
                    width={154}
                    height={90}
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    
                    className="apexcharts-svg"
                    transform="translate(0, 0)"
                    style={{ background: "transparent" }}
                  >
                    <g
                      id="SvgjsG1295"
                      className="apexcharts-inner apexcharts-graphical"
                      transform="translate(0, 0)"
                    >
                      <defs id="SvgjsDefs1294">
                        <clipPath id="gridRectMaskftyyhcmyi">
                          <rect
                            id="SvgjsRect1300"
                            width={161}
                            height={93}
                            x="-3.5"
                            y="-1.5"
                            rx={0}
                            ry={0}
                            opacity={1}
                            strokeWidth={0}
                            stroke="none"
                            strokeDasharray={0}
                            fill="#fff"
                          />
                        </clipPath>
                        <clipPath id="forecastMaskftyyhcmyi" />
                        <clipPath id="nonForecastMaskftyyhcmyi" />
                        <clipPath id="gridRectMarkerMaskftyyhcmyi">
                          <rect
                            id="SvgjsRect1301"
                            width={158}
                            height={94}
                            x={-2}
                            y={-2}
                            rx={0}
                            ry={0}
                            opacity={1}
                            strokeWidth={0}
                            stroke="none"
                            strokeDasharray={0}
                            fill="#fff"
                          />
                        </clipPath>
                        <linearGradient
                          id="SvgjsLinearGradient1306"
                          x1={0}
                          y1={0}
                          x2={0}
                          y2={1}
                        >
                          <stop
                            id="SvgjsStop1307"
                            stopOpacity="0.45"
                            stopColor="rgba(241,181,97,0.45)"
                            offset="0.2"
                          />
                          <stop
                            id="SvgjsStop1308"
                            stopOpacity="0.05"
                            stopColor="rgba(255,255,255,0.05)"
                            offset={1}
                          />
                          <stop
                            id="SvgjsStop1309"
                            stopOpacity="0.05"
                            stopColor="rgba(255,255,255,0.05)"
                            offset={1}
                          />
                          <stop
                            id="SvgjsStop1310"
                            stopOpacity="0.45"
                            stopColor="rgba(241,181,97,0.45)"
                            offset={1}
                          />
                        </linearGradient>
                      </defs>
                      <line
                        id="SvgjsLine1299"
                        x1="76.5"
                        y1={0}
                        x2="76.5"
                        y2={90}
                        stroke="#b6b6b6"
                        strokeDasharray={3}
                        strokeLinecap="butt"
                        className="apexcharts-xcrosshairs"
                        x="76.5"
                        y={0}
                        width={1}
                        height={90}
                        fill="#b1b9c4"
                        filter="none"
                        fillOpacity="0.9"
                        strokeWidth={1}
                      />
                      <g
                        id="SvgjsG1313"
                        className="apexcharts-xaxis"
                        transform="translate(0, 0)"
                      >
                        <g
                          id="SvgjsG1314"
                          className="apexcharts-xaxis-texts-g"
                          transform="translate(0, -4)"
                        />
                      </g>
                      <g id="SvgjsG1323" className="apexcharts-grid">
                        <g
                          id="SvgjsG1324"
                          className="apexcharts-gridlines-horizontal"
                          style={{ display: "none" }}
                        >
                          <line
                            id="SvgjsLine1326"
                            x1={0}
                            y1={0}
                            x2={154}
                            y2={0}
                            stroke="#e0e0e0"
                            strokeDasharray={0}
                            strokeLinecap="butt"
                            className="apexcharts-gridline"
                          />
                          <line
                            id="SvgjsLine1327"
                            x1={0}
                            y1={18}
                            x2={154}
                            y2={18}
                            stroke="#e0e0e0"
                            strokeDasharray={0}
                            strokeLinecap="butt"
                            className="apexcharts-gridline"
                          />
                          <line
                            id="SvgjsLine1328"
                            x1={0}
                            y1={36}
                            x2={154}
                            y2={36}
                            stroke="#e0e0e0"
                            strokeDasharray={0}
                            strokeLinecap="butt"
                            className="apexcharts-gridline"
                          />
                          <line
                            id="SvgjsLine1329"
                            x1={0}
                            y1={54}
                            x2={154}
                            y2={54}
                            stroke="#e0e0e0"
                            strokeDasharray={0}
                            strokeLinecap="butt"
                            className="apexcharts-gridline"
                          />
                          <line
                            id="SvgjsLine1330"
                            x1={0}
                            y1={72}
                            x2={154}
                            y2={72}
                            stroke="#e0e0e0"
                            strokeDasharray={0}
                            strokeLinecap="butt"
                            className="apexcharts-gridline"
                          />
                          <line
                            id="SvgjsLine1331"
                            x1={0}
                            y1={90}
                            x2={154}
                            y2={90}
                            stroke="#e0e0e0"
                            strokeDasharray={0}
                            strokeLinecap="butt"
                            className="apexcharts-gridline"
                          />
                        </g>
                        <g
                          id="SvgjsG1325"
                          className="apexcharts-gridlines-vertical"
                          style={{ display: "none" }}
                        />
                        <line
                          id="SvgjsLine1333"
                          x1={0}
                          y1={90}
                          x2={154}
                          y2={90}
                          stroke="transparent"
                          strokeDasharray={0}
                          strokeLinecap="butt"
                        />
                        <line
                          id="SvgjsLine1332"
                          x1={0}
                          y1={1}
                          x2={0}
                          y2={90}
                          stroke="transparent"
                          strokeDasharray={0}
                          strokeLinecap="butt"
                        />
                      </g>
                      <g
                        id="SvgjsG1302"
                        className="apexcharts-area-series apexcharts-plot-series"
                      >
                        <g
                          id="SvgjsG1303"
                          className="apexcharts-series"
                          seriesname="series-1"
                          
                          rel={1}
                          
                        >
                          <path
                            id="SvgjsPath1311"
                            d="M 0 90L 0 63C 8.983333333333333 63 16.683333333333337 54 25.666666666666668 54C 34.65 54 42.35 72 51.333333333333336 72C 60.31666666666667 72 68.01666666666667 9 77 9C 85.98333333333333 9 93.68333333333334 54 102.66666666666667 54C 111.65 54 119.35000000000001 72 128.33333333333334 72C 137.31666666666666 72 145.01666666666668 81 154 81C 154 81 154 81 154 90M 154 81z"
                            fill="url(#SvgjsLinearGradient1306)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            strokeLinecap="butt"
                            strokeWidth={0}
                            strokeDasharray={0}
                            className="apexcharts-area"
                            index={0}
                            clipPath="url(#gridRectMaskftyyhcmyi)"
                            pathto="M 0 90L 0 63C 8.983333333333333 63 16.683333333333337 54 25.666666666666668 54C 34.65 54 42.35 72 51.333333333333336 72C 60.31666666666667 72 68.01666666666667 9 77 9C 85.98333333333333 9 93.68333333333334 54 102.66666666666667 54C 111.65 54 119.35000000000001 72 128.33333333333334 72C 137.31666666666666 72 145.01666666666668 81 154 81C 154 81 154 81 154 90M 154 81z"
                            pathfrom="M -1 90L -1 90L 25.666666666666668 90L 51.333333333333336 90L 77 90L 102.66666666666667 90L 128.33333333333334 90L 154 90"
                          />
                          <path
                            id="SvgjsPath1312"
                            d="M 0 63C 8.983333333333333 63 16.683333333333337 54 25.666666666666668 54C 34.65 54 42.35 72 51.333333333333336 72C 60.31666666666667 72 68.01666666666667 9 77 9C 85.98333333333333 9 93.68333333333334 54 102.66666666666667 54C 111.65 54 119.35000000000001 72 128.33333333333334 72C 137.31666666666666 72 145.01666666666668 81 154 81"
                            fill="none"
                            fillOpacity={1}
                            stroke="#f1b561"
                            strokeOpacity={1}
                            strokeLinecap="butt"
                            strokeWidth={3}
                            strokeDasharray={0}
                            className="apexcharts-area"
                            index={0}
                            clipPath="url(#gridRectMaskftyyhcmyi)"
                            pathto="M 0 63C 8.983333333333333 63 16.683333333333337 54 25.666666666666668 54C 34.65 54 42.35 72 51.333333333333336 72C 60.31666666666667 72 68.01666666666667 9 77 9C 85.98333333333333 9 93.68333333333334 54 102.66666666666667 54C 111.65 54 119.35000000000001 72 128.33333333333334 72C 137.31666666666666 72 145.01666666666668 81 154 81"
                            pathfrom="M -1 90L -1 90L 25.666666666666668 90L 51.333333333333336 90L 77 90L 102.66666666666667 90L 128.33333333333334 90L 154 90"
                          />
                          <g
                            id="SvgjsG1304"
                            className="apexcharts-series-markers-wrap"
                            
                          >
                            <g className="apexcharts-series-markers">
                              <circle
                                id="SvgjsCircle1339"
                                r={0}
                                cx={77}
                                cy={9}
                                className="apexcharts-marker wjyww73yek no-pointer-events"
                                stroke="#ffffff"
                                fill="#f1b561"
                                fillOpacity={1}
                                strokeWidth={2}
                                strokeOpacity="0.9"
                                default-marker-size={0}
                              />
                            </g>
                          </g>
                        </g>
                        <g
                          id="SvgjsG1305"
                          className="apexcharts-datalabels"
                          
                        />
                      </g>
                      <line
                        id="SvgjsLine1334"
                        x1={0}
                        y1={0}
                        x2={154}
                        y2={0}
                        stroke="#b6b6b6"
                        strokeDasharray={0}
                        strokeWidth={1}
                        strokeLinecap="butt"
                        className="apexcharts-ycrosshairs"
                      />
                      <line
                        id="SvgjsLine1335"
                        x1={0}
                        y1={0}
                        x2={154}
                        y2={0}
                        strokeDasharray={0}
                        strokeWidth={0}
                        strokeLinecap="butt"
                        className="apexcharts-ycrosshairs-hidden"
                      />
                      <g id="SvgjsG1336" className="apexcharts-yaxis-annotations" />
                      <g id="SvgjsG1337" className="apexcharts-xaxis-annotations" />
                      <g id="SvgjsG1338" className="apexcharts-point-annotations" />
                    </g>
                    <rect
                      id="SvgjsRect1298"
                      width={0}
                      height={0}
                      x={0}
                      y={0}
                      rx={0}
                      ry={0}
                      opacity={1}
                      strokeWidth={0}
                      stroke="none"
                      strokeDasharray={0}
                      fill="#fefefe"
                    />
                    <g
                      id="SvgjsG1322"
                      className="apexcharts-yaxis"
                      rel={0}
                      transform="translate(-18, 0)"
                    />
                    <g id="SvgjsG1296" className="apexcharts-annotations" />
                  </svg>
                  <div className="apexcharts-legend" style={{ maxHeight: 45 }} />
                  <div
                    className="apexcharts-tooltip apexcharts-theme-light"
                    style={{ left: "32.5089px", top: 12 }}
                  >
                    <div
                      className="apexcharts-tooltip-series-group apexcharts-active"
                      style={{ order: 1, display: "flex" }}
                    >
                      <span
                        className="apexcharts-tooltip-marker"
                        style={{
                          backgroundColor: "rgb(241, 181, 97)",
                          display: "none"
                        }}
                      />
                      <div
                        className="apexcharts-tooltip-text"
                        style={{
                          fontFamily: "Helvetica, Arial, sans-serif",
                          fontSize: 12
                        }}
                      >
                        <div className="apexcharts-tooltip-y-group">
                          <span className="apexcharts-tooltip-text-y-label" />
                          <span className="apexcharts-tooltip-text-y-value">45</span>
                        </div>
                        <div className="apexcharts-tooltip-goals-group">
                          <span className="apexcharts-tooltip-text-goals-label" />
                          <span className="apexcharts-tooltip-text-goals-value" />
                        </div>
                        <div className="apexcharts-tooltip-z-group">
                          <span className="apexcharts-tooltip-text-z-label" />
                          <span className="apexcharts-tooltip-text-z-value" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light">
                    <div className="apexcharts-yaxistooltip-text" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*end col*/}
          <div className="col-xl-3 col-lg-6 mt-4">
            <div className="card shadow border-0 p-4">
              <div className="d-flex justify-content-between mb-3">
                <h6 className="align-items-center mb-0">
                  Canceled{" "}
                  <span className="badge rounded-pill bg-soft-danger ms-1">-5%</span>
                </h6>
                <p className="mb-0 text-muted">220+ Week</p>
              </div>
              <div id="chart-4" style={{ minHeight: 90 }}>
                <div
                  id="apexcharts0li719d3"
                  className="apexcharts-canvas apexcharts0li719d3 apexcharts-theme-light"
                  style={{ width: 154, height: 90 }}
                >
                  <svg
                    id="SvgjsSvg1341"
                    width={154}
                    height={90}
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    
                    className="apexcharts-svg"
                    transform="translate(0, 0)"
                    style={{ background: "transparent" }}
                  >
                    <g
                      id="SvgjsG1343"
                      className="apexcharts-inner apexcharts-graphical"
                      transform="translate(0, 0)"
                    >
                      <defs id="SvgjsDefs1342">
                        <clipPath id="gridRectMask0li719d3">
                          <rect
                            id="SvgjsRect1348"
                            width={161}
                            height={93}
                            x="-3.5"
                            y="-1.5"
                            rx={0}
                            ry={0}
                            opacity={1}
                            strokeWidth={0}
                            stroke="none"
                            strokeDasharray={0}
                            fill="#fff"
                          />
                        </clipPath>
                        <clipPath id="forecastMask0li719d3" />
                        <clipPath id="nonForecastMask0li719d3" />
                        <clipPath id="gridRectMarkerMask0li719d3">
                          <rect
                            id="SvgjsRect1349"
                            width={158}
                            height={94}
                            x={-2}
                            y={-2}
                            rx={0}
                            ry={0}
                            opacity={1}
                            strokeWidth={0}
                            stroke="none"
                            strokeDasharray={0}
                            fill="#fff"
                          />
                        </clipPath>
                        <linearGradient
                          id="SvgjsLinearGradient1354"
                          x1={0}
                          y1={0}
                          x2={0}
                          y2={1}
                        >
                          <stop
                            id="SvgjsStop1355"
                            stopOpacity="0.45"
                            stopColor="rgba(240,115,90,0.45)"
                            offset="0.2"
                          />
                          <stop
                            id="SvgjsStop1356"
                            stopOpacity="0.05"
                            stopColor="rgba(255,255,255,0.05)"
                            offset={1}
                          />
                          <stop
                            id="SvgjsStop1357"
                            stopOpacity="0.05"
                            stopColor="rgba(255,255,255,0.05)"
                            offset={1}
                          />
                          <stop
                            id="SvgjsStop1358"
                            stopOpacity="0.45"
                            stopColor="rgba(240,115,90,0.45)"
                            offset={1}
                          />
                        </linearGradient>
                      </defs>
                      <line
                        id="SvgjsLine1347"
                        x1={0}
                        y1={0}
                        x2={0}
                        y2={90}
                        stroke="#b6b6b6"
                        strokeDasharray={3}
                        strokeLinecap="butt"
                        className="apexcharts-xcrosshairs"
                        x={0}
                        y={0}
                        width={1}
                        height={90}
                        fill="#b1b9c4"
                        filter="none"
                        fillOpacity="0.9"
                        strokeWidth={1}
                      />
                      <g
                        id="SvgjsG1361"
                        className="apexcharts-xaxis"
                        transform="translate(0, 0)"
                      >
                        <g
                          id="SvgjsG1362"
                          className="apexcharts-xaxis-texts-g"
                          transform="translate(0, -4)"
                        />
                      </g>
                      <g id="SvgjsG1371" className="apexcharts-grid">
                        <g
                          id="SvgjsG1372"
                          className="apexcharts-gridlines-horizontal"
                          style={{ display: "none" }}
                        >
                          <line
                            id="SvgjsLine1374"
                            x1={0}
                            y1={0}
                            x2={154}
                            y2={0}
                            stroke="#e0e0e0"
                            strokeDasharray={0}
                            strokeLinecap="butt"
                            className="apexcharts-gridline"
                          />
                          <line
                            id="SvgjsLine1375"
                            x1={0}
                            y1={18}
                            x2={154}
                            y2={18}
                            stroke="#e0e0e0"
                            strokeDasharray={0}
                            strokeLinecap="butt"
                            className="apexcharts-gridline"
                          />
                          <line
                            id="SvgjsLine1376"
                            x1={0}
                            y1={36}
                            x2={154}
                            y2={36}
                            stroke="#e0e0e0"
                            strokeDasharray={0}
                            strokeLinecap="butt"
                            className="apexcharts-gridline"
                          />
                          <line
                            id="SvgjsLine1377"
                            x1={0}
                            y1={54}
                            x2={154}
                            y2={54}
                            stroke="#e0e0e0"
                            strokeDasharray={0}
                            strokeLinecap="butt"
                            className="apexcharts-gridline"
                          />
                          <line
                            id="SvgjsLine1378"
                            x1={0}
                            y1={72}
                            x2={154}
                            y2={72}
                            stroke="#e0e0e0"
                            strokeDasharray={0}
                            strokeLinecap="butt"
                            className="apexcharts-gridline"
                          />
                          <line
                            id="SvgjsLine1379"
                            x1={0}
                            y1={90}
                            x2={154}
                            y2={90}
                            stroke="#e0e0e0"
                            strokeDasharray={0}
                            strokeLinecap="butt"
                            className="apexcharts-gridline"
                          />
                        </g>
                        <g
                          id="SvgjsG1373"
                          className="apexcharts-gridlines-vertical"
                          style={{ display: "none" }}
                        />
                        <line
                          id="SvgjsLine1381"
                          x1={0}
                          y1={90}
                          x2={154}
                          y2={90}
                          stroke="transparent"
                          strokeDasharray={0}
                          strokeLinecap="butt"
                        />
                        <line
                          id="SvgjsLine1380"
                          x1={0}
                          y1={1}
                          x2={0}
                          y2={90}
                          stroke="transparent"
                          strokeDasharray={0}
                          strokeLinecap="butt"
                        />
                      </g>
                      <g
                        id="SvgjsG1350"
                        className="apexcharts-area-series apexcharts-plot-series"
                      >
                        <g
                          id="SvgjsG1351"
                          className="apexcharts-series"
                          seriesname="series-1"
                          
                          rel={1}
                          
                        >
                          <path
                            id="SvgjsPath1359"
                            d="M 0 90L 0 81C 8.983333333333333 81 16.683333333333337 63 25.666666666666668 63C 34.65 63 42.35 45 51.333333333333336 45C 60.31666666666667 45 68.01666666666667 9 77 9C 85.98333333333333 9 93.68333333333334 36 102.66666666666667 36C 111.65 36 119.35000000000001 63 128.33333333333334 63C 137.31666666666666 63 145.01666666666668 45 154 45C 154 45 154 45 154 90M 154 45z"
                            fill="url(#SvgjsLinearGradient1354)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            strokeLinecap="butt"
                            strokeWidth={0}
                            strokeDasharray={0}
                            className="apexcharts-area"
                            index={0}
                            clipPath="url(#gridRectMask0li719d3)"
                            pathto="M 0 90L 0 81C 8.983333333333333 81 16.683333333333337 63 25.666666666666668 63C 34.65 63 42.35 45 51.333333333333336 45C 60.31666666666667 45 68.01666666666667 9 77 9C 85.98333333333333 9 93.68333333333334 36 102.66666666666667 36C 111.65 36 119.35000000000001 63 128.33333333333334 63C 137.31666666666666 63 145.01666666666668 45 154 45C 154 45 154 45 154 90M 154 45z"
                            pathfrom="M -1 108L -1 108L 25.666666666666668 108L 51.333333333333336 108L 77 108L 102.66666666666667 108L 128.33333333333334 108L 154 108"
                          />
                          <path
                            id="SvgjsPath1360"
                            d="M 0 81C 8.983333333333333 81 16.683333333333337 63 25.666666666666668 63C 34.65 63 42.35 45 51.333333333333336 45C 60.31666666666667 45 68.01666666666667 9 77 9C 85.98333333333333 9 93.68333333333334 36 102.66666666666667 36C 111.65 36 119.35000000000001 63 128.33333333333334 63C 137.31666666666666 63 145.01666666666668 45 154 45"
                            fill="none"
                            fillOpacity={1}
                            stroke="#f0735a"
                            strokeOpacity={1}
                            strokeLinecap="butt"
                            strokeWidth={3}
                            strokeDasharray={0}
                            className="apexcharts-area"
                            index={0}
                            clipPath="url(#gridRectMask0li719d3)"
                            pathto="M 0 81C 8.983333333333333 81 16.683333333333337 63 25.666666666666668 63C 34.65 63 42.35 45 51.333333333333336 45C 60.31666666666667 45 68.01666666666667 9 77 9C 85.98333333333333 9 93.68333333333334 36 102.66666666666667 36C 111.65 36 119.35000000000001 63 128.33333333333334 63C 137.31666666666666 63 145.01666666666668 45 154 45"
                            pathfrom="M -1 108L -1 108L 25.666666666666668 108L 51.333333333333336 108L 77 108L 102.66666666666667 108L 128.33333333333334 108L 154 108"
                          />
                          <g
                            id="SvgjsG1352"
                            className="apexcharts-series-markers-wrap"
                            
                          >
                            <g className="apexcharts-series-markers">
                              <circle
                                id="SvgjsCircle1387"
                                r={0}
                                cx={0}
                                cy={0}
                                className="apexcharts-marker wzw4mnvnn no-pointer-events"
                                stroke="#ffffff"
                                fill="#f0735a"
                                fillOpacity={1}
                                strokeWidth={2}
                                strokeOpacity="0.9"
                                default-marker-size={0}
                              />
                            </g>
                          </g>
                        </g>
                        <g
                          id="SvgjsG1353"
                          className="apexcharts-datalabels"
                          
                        />
                      </g>
                      <line
                        id="SvgjsLine1382"
                        x1={0}
                        y1={0}
                        x2={154}
                        y2={0}
                        stroke="#b6b6b6"
                        strokeDasharray={0}
                        strokeWidth={1}
                        strokeLinecap="butt"
                        className="apexcharts-ycrosshairs"
                      />
                      <line
                        id="SvgjsLine1383"
                        x1={0}
                        y1={0}
                        x2={154}
                        y2={0}
                        strokeDasharray={0}
                        strokeWidth={0}
                        strokeLinecap="butt"
                        className="apexcharts-ycrosshairs-hidden"
                      />
                      <g id="SvgjsG1384" className="apexcharts-yaxis-annotations" />
                      <g id="SvgjsG1385" className="apexcharts-xaxis-annotations" />
                      <g id="SvgjsG1386" className="apexcharts-point-annotations" />
                    </g>
                    <rect
                      id="SvgjsRect1346"
                      width={0}
                      height={0}
                      x={0}
                      y={0}
                      rx={0}
                      ry={0}
                      opacity={1}
                      strokeWidth={0}
                      stroke="none"
                      strokeDasharray={0}
                      fill="#fefefe"
                    />
                    <g
                      id="SvgjsG1370"
                      className="apexcharts-yaxis"
                      rel={0}
                      transform="translate(-18, 0)"
                    />
                    <g id="SvgjsG1344" className="apexcharts-annotations" />
                  </svg>
                  <div className="apexcharts-legend" style={{ maxHeight: 45 }} />
                  <div className="apexcharts-tooltip apexcharts-theme-light">
                    <div
                      className="apexcharts-tooltip-series-group"
                      style={{ order: 1 }}
                    >
                      <span
                        className="apexcharts-tooltip-marker"
                        style={{ backgroundColor: "rgb(240, 115, 90)" }}
                      />
                      <div
                        className="apexcharts-tooltip-text"
                        style={{
                          fontFamily: "Helvetica, Arial, sans-serif",
                          fontSize: 12
                        }}
                      >
                        <div className="apexcharts-tooltip-y-group">
                          <span className="apexcharts-tooltip-text-y-label" />
                          <span className="apexcharts-tooltip-text-y-value" />
                        </div>
                        <div className="apexcharts-tooltip-goals-group">
                          <span className="apexcharts-tooltip-text-goals-label" />
                          <span className="apexcharts-tooltip-text-goals-value" />
                        </div>
                        <div className="apexcharts-tooltip-z-group">
                          <span className="apexcharts-tooltip-text-z-label" />
                          <span className="apexcharts-tooltip-text-z-value" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light">
                    <div className="apexcharts-yaxistooltip-text" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*end col*/}
        </div>
        {/*end row*/}
        <div className="row">
          <div className="col-xl-4 col-lg-6 mt-4">
            <div className="card border-0 shadow rounded">
              <div className="d-flex justify-content-between p-4 border-bottom">
                <h6 className="mb-0">
                  <i className="uil uil-calender text-primary me-1 h5" /> Latest
                  Appointment
                </h6>
                <h6 className="text-muted mb-0">55 Patients</h6>
              </div>
              <ul className="list-unstyled mb-0 p-4">
                <li>
                  <a href="javascript:void(0)">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-inline-flex">
                        <img
                          src="../assets/images/client/01.jpg"
                          className="avatar avatar-md-sm rounded-circle border shadow"
                          alt=""
                        />
                        <div className="ms-3">
                          <h6 className="text-dark mb-0 d-block">Calvin Carlo</h6>
                          <small className="text-muted">
                            Booking on 27th Nov, 2020
                          </small>
                        </div>
                      </div>
                      <i className="uil uil-arrow-right h4 text-dark" />
                    </div>
                  </a>
                </li>
                <li className="mt-4">
                  <a href="javascript:void(0)">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-inline-flex">
                        <img
                          src="../assets/images/client/02.jpg"
                          className="avatar avatar-md-sm rounded-circle border shadow"
                          alt=""
                        />
                        <div className="ms-3">
                          <h6 className="text-dark mb-0 d-block">Joya Khan</h6>
                          <small className="text-muted">
                            Booking on 27th Nov, 2020
                          </small>
                        </div>
                      </div>
                      <i className="uil uil-arrow-right h4 text-dark" />
                    </div>
                  </a>
                </li>
                <li className="mt-4">
                  <a href="javascript:void(0)">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-inline-flex">
                        <img
                          src="../assets/images/client/03.jpg"
                          className="avatar avatar-md-sm rounded-circle border shadow"
                          alt=""
                        />
                        <div className="ms-3">
                          <h6 className="text-dark mb-0 d-block">Amelia Muli</h6>
                          <small className="text-muted">
                            Booking on 27th Nov, 2020
                          </small>
                        </div>
                      </div>
                      <i className="uil uil-arrow-right h4 text-dark" />
                    </div>
                  </a>
                </li>
                <li className="mt-4">
                  <a href="javascript:void(0)">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-inline-flex">
                        <img
                          src="../assets/images/client/04.jpg"
                          className="avatar avatar-md-sm rounded-circle border shadow"
                          alt=""
                        />
                        <div className="ms-3">
                          <h6 className="text-dark mb-0 d-block">Nik Ronaldo</h6>
                          <small className="text-muted">
                            Booking on 27th Nov, 2020
                          </small>
                        </div>
                      </div>
                      <i className="uil uil-arrow-right h4 text-dark" />
                    </div>
                  </a>
                </li>
                <li className="mt-4">
                  <a href="javascript:void(0)">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-inline-flex">
                        <img
                          src="../assets/images/client/05.jpg"
                          className="avatar avatar-md-sm rounded-circle border shadow"
                          alt=""
                        />
                        <div className="ms-3">
                          <h6 className="text-dark mb-0 d-block">Crista Joseph</h6>
                          <small className="text-muted">
                            Booking on 27th Nov, 2020
                          </small>
                        </div>
                      </div>
                      <i className="uil uil-arrow-right h4 text-dark" />
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/*end col*/}
          <div className="col-xl-4 col-lg-6 mt-4">
            <div className="card border-0 shadow rounded">
              <div className="d-flex justify-content-between p-4 border-bottom">
                <h6 className="mb-0">
                  <i className="uil uil-calendar-alt text-primary me-1 h5" /> Upcoming
                  Appointment
                </h6>
                <h6 className="text-muted mb-0">55 Patients</h6>
              </div>
              <ul className="list-unstyled mb-0 p-4">
                <li>
                  <a href="javascript:void(0)">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-inline-flex">
                        <img
                          src="../assets/images/client/06.jpg"
                          className="avatar avatar-md-sm rounded-circle border shadow"
                          alt=""
                        />
                        <div className="ms-3">
                          <h6 className="text-dark mb-0 d-block">Cristino Murphy</h6>
                          <small className="text-muted">
                            Booking on 27th Nov, 2020
                          </small>
                        </div>
                      </div>
                      <i className="uil uil-arrow-right h4 text-dark" />
                    </div>
                  </a>
                </li>
                <li className="mt-4">
                  <a href="javascript:void(0)">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-inline-flex">
                        <img
                          src="../assets/images/client/07.jpg"
                          className="avatar avatar-md-sm rounded-circle border shadow"
                          alt=""
                        />
                        <div className="ms-3">
                          <h6 className="text-dark mb-0 d-block">Nick Jons</h6>
                          <small className="text-muted">
                            Booking on 27th Nov, 2020
                          </small>
                        </div>
                      </div>
                      <i className="uil uil-arrow-right h4 text-dark" />
                    </div>
                  </a>
                </li>
                <li className="mt-4">
                  <a href="javascript:void(0)">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-inline-flex">
                        <img
                          src="../assets/images/client/08.jpg"
                          className="avatar avatar-md-sm rounded-circle border shadow"
                          alt=""
                        />
                        <div className="ms-3">
                          <h6 className="text-dark mb-0 d-block">Alex Dirio</h6>
                          <small className="text-muted">
                            Booking on 27th Nov, 2020
                          </small>
                        </div>
                      </div>
                      <i className="uil uil-arrow-right h4 text-dark" />
                    </div>
                  </a>
                </li>
                <li className="mt-4">
                  <a href="javascript:void(0)">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-inline-flex">
                        <img
                          src="../assets/images/client/09.jpg"
                          className="avatar avatar-md-sm rounded-circle border shadow"
                          alt=""
                        />
                        <div className="ms-3">
                          <h6 className="text-dark mb-0 d-block">Vrunda Koli</h6>
                          <small className="text-muted">
                            Booking on 27th Nov, 2020
                          </small>
                        </div>
                      </div>
                      <i className="uil uil-arrow-right h4 text-dark" />
                    </div>
                  </a>
                </li>
                <li className="mt-4">
                  <a href="javascript:void(0)">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-inline-flex">
                        <img
                          src="../assets/images/client/10.jpg"
                          className="avatar avatar-md-sm rounded-circle border shadow"
                          alt=""
                        />
                        <div className="ms-3">
                          <h6 className="text-dark mb-0 d-block">Aisha Low</h6>
                          <small className="text-muted">
                            Booking on 27th Nov, 2020
                          </small>
                        </div>
                      </div>
                      <i className="uil uil-arrow-right h4 text-dark" />
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/*end col*/}
          <div className="col-xl-4 col-lg-12 mt-4">
            <div className="card border-0 shadow rounded">
              <div className="p-4 border-bottom">
                <h6 className="mb-0">Patient's Review</h6>
              </div>
              <div className="p-4">
                <div className="tns-outer" id="tns1-ow">
                  <div
                    className="tns-liveregion tns-visually-hidden"
                    aria-live="polite"
                    aria-atomic="true"
                  >
                    slide <span className="current">1</span> of 6
                  </div>
                  <div id="tns1-mw" className="tns-ovh">
                    <div className="tns-inner" id="tns1-iw">
                      <div
                        className="client-review-slider  tns-slider tns-carousel tns-subpixel tns-calc tns-horizontal"
                        id="tns1"
                        style={{ transform: "translate3d(0%, 0px, 0px)" }}
                      >
                        <div
                          className="tiny-slide tns-item tns-slide-active"
                          id="tns1-item0"
                        >
                          <p className="text-muted fst-italic">
                            " It seems that only melodies in order to have a
                            'ready-made' text to sing with the melody of the
                            originalthe 'Lorem Ipsum', which is said to have
                            originated century. "
                          </p>
                          <div className="d-inline-flex align-items-center">
                            <img
                              src="../assets/images/client/01.jpg"
                              className="img-fluid avatar avatar-small rounded-circle mx-auto shadow my-3"
                              alt=""
                            />
                            <div className="ms-3">
                              <ul className="list-unstyled d-block mb-0">
                                <li className="list-inline-item">
                                  <i className="mdi mdi-star text-warning" />
                                </li>
                                <li className="list-inline-item">
                                  <i className="mdi mdi-star text-warning" />
                                </li>
                                <li className="list-inline-item">
                                  <i className="mdi mdi-star text-warning" />
                                </li>
                                <li className="list-inline-item">
                                  <i className="mdi mdi-star text-warning" />
                                </li>
                                <li className="list-inline-item">
                                  <i className="mdi mdi-star text-warning" />
                                </li>
                              </ul>
                              <h6 className="text-primary">
                                - Thomas Israel{" "}
                                <small className="text-muted">C.E.O</small>
                              </h6>
                            </div>
                          </div>
                        </div>
                        {/*end customer testi*/}
                        <div
                          className="tiny-slide tns-item"
                          id="tns1-item1"
                          aria-hidden="true"
                          tabIndex={-1}
                        >
                          <p className="text-muted fst-italic">
                            " The advantage of its writing melodies in order to have a
                            'ready-made' text to sing with the melody and the to
                            itself or distract the viewer's attention from the layout.
                            "
                          </p>
                          <div className="d-inline-flex align-items-center">
                            <img
                              src="../assets/images/client/02.jpg"
                              className="img-fluid avatar avatar-small rounded-circle mx-auto shadow my-3"
                              alt=""
                            />
                            <div className="ms-3">
                              <ul className="list-unstyled d-block mb-0">
                                <li className="list-inline-item">
                                  <i className="mdi mdi-star text-warning" />
                                </li>
                                <li className="list-inline-item">
                                  <i className="mdi mdi-star text-warning" />
                                </li>
                                <li className="list-inline-item">
                                  <i className="mdi mdi-star text-warning" />
                                </li>
                                <li className="list-inline-item">
                                  <i className="mdi mdi-star text-warning" />
                                </li>
                                <li className="list-inline-item">
                                  <i className="mdi mdi-star text-warning" />
                                </li>
                              </ul>
                              <h6 className="text-primary">
                                - Carl Oliver{" "}
                                <small className="text-muted">P.A</small>
                              </h6>
                            </div>
                          </div>
                        </div>
                        {/*end customer testi*/}
                        <div
                          className="tiny-slide tns-item"
                          id="tns1-item2"
                          aria-hidden="true"
                          tabIndex={-1}
                        >
                          <p className="text-muted fst-italic">
                            " There is now an in order to have a 'ready-made' text to
                            sing with the melody alternatives to the classic Lorem
                            Ipsum texts are amusing. "
                          </p>
                          <div className="d-inline-flex align-items-center">
                            <img
                              src="../assets/images/client/03.jpg"
                              className="img-fluid avatar avatar-small rounded-circle mx-auto shadow my-3"
                              alt=""
                            />
                            <div className="ms-3">
                              <ul className="list-unstyled d-block mb-0">
                                <li className="list-inline-item">
                                  <i className="mdi mdi-star text-warning" />
                                </li>
                                <li className="list-inline-item">
                                  <i className="mdi mdi-star text-warning" />
                                </li>
                                <li className="list-inline-item">
                                  <i className="mdi mdi-star text-warning" />
                                </li>
                                <li className="list-inline-item">
                                  <i className="mdi mdi-star text-warning" />
                                </li>
                                <li className="list-inline-item">
                                  <i className="mdi mdi-star text-warning" />
                                </li>
                              </ul>
                              <h6 className="text-primary">
                                - Barbara McIntosh{" "}
                                <small className="text-muted">M.D</small>
                              </h6>
                            </div>
                          </div>
                        </div>
                        {/*end customer testi*/}
                        <div
                          className="tiny-slide tns-item"
                          id="tns1-item3"
                          aria-hidden="true"
                          tabIndex={-1}
                        >
                          <p className="text-muted fst-italic">
                            " According to most sources in order to have a
                            'ready-made' text to sing with the melody the origin of
                            the text by compiling all the instances. "
                          </p>
                          <div className="d-inline-flex align-items-center">
                            <img
                              src="../assets/images/client/04.jpg"
                              className="img-fluid avatar avatar-small rounded-circle mx-auto shadow my-3"
                              alt=""
                            />
                            <div className="ms-3">
                              <ul className="list-unstyled d-block mb-0">
                                <li className="list-inline-item">
                                  <i className="mdi mdi-star text-warning" />
                                </li>
                                <li className="list-inline-item">
                                  <i className="mdi mdi-star text-warning" />
                                </li>
                                <li className="list-inline-item">
                                  <i className="mdi mdi-star text-warning" />
                                </li>
                                <li className="list-inline-item">
                                  <i className="mdi mdi-star text-warning" />
                                </li>
                                <li className="list-inline-item">
                                  <i className="mdi mdi-star text-warning" />
                                </li>
                              </ul>
                              <h6 className="text-primary">
                                - Christa Smith{" "}
                                <small className="text-muted">Manager</small>
                              </h6>
                            </div>
                          </div>
                        </div>
                        {/*end customer testi*/}
                        <div
                          className="tiny-slide tns-item"
                          id="tns1-item4"
                          aria-hidden="true"
                          tabIndex={-1}
                        >
                          <p className="text-muted fst-italic">
                            " It seems that only in order to have a 'ready-made' text
                            to sing with the melody 'Lorem Ipsum', which is said to
                            have originated 16th century. "
                          </p>
                          <div className="d-inline-flex align-items-center">
                            <img
                              src="../assets/images/client/05.jpg"
                              className="img-fluid avatar avatar-small rounded-circle mx-auto shadow my-3"
                              alt=""
                            />
                            <div className="ms-3">
                              <ul className="list-unstyled d-block mb-0">
                                <li className="list-inline-item">
                                  <i className="mdi mdi-star text-warning" />
                                </li>
                                <li className="list-inline-item">
                                  <i className="mdi mdi-star text-warning" />
                                </li>
                                <li className="list-inline-item">
                                  <i className="mdi mdi-star text-warning" />
                                </li>
                                <li className="list-inline-item">
                                  <i className="mdi mdi-star text-warning" />
                                </li>
                                <li className="list-inline-item">
                                  <i className="mdi mdi-star text-warning" />
                                </li>
                              </ul>
                              <h6 className="text-primary">
                                - Dean Tolle{" "}
                                <small className="text-muted">Developer</small>
                              </h6>
                            </div>
                          </div>
                        </div>
                        {/*end customer testi*/}
                        <div
                          className="tiny-slide tns-item"
                          id="tns1-item5"
                          aria-hidden="true"
                          tabIndex={-1}
                        >
                          <p className="text-muted fst-italic">
                            " It seems that only lyrics when writing melodies in order
                            to have a 'ready-made' text to sing with the melody of
                            time certain letters were added or deleted at the text. "
                          </p>
                          <div className="d-inline-flex align-items-center">
                            <img
                              src="../assets/images/client/06.jpg"
                              className="img-fluid avatar avatar-small rounded-circle mx-auto shadow my-3"
                              alt=""
                            />
                            <div className="ms-3">
                              <ul className="list-unstyled d-block mb-0">
                                <li className="list-inline-item">
                                  <i className="mdi mdi-star text-warning" />
                                </li>
                                <li className="list-inline-item">
                                  <i className="mdi mdi-star text-warning" />
                                </li>
                                <li className="list-inline-item">
                                  <i className="mdi mdi-star text-warning" />
                                </li>
                                <li className="list-inline-item">
                                  <i className="mdi mdi-star text-warning" />
                                </li>
                                <li className="list-inline-item">
                                  <i className="mdi mdi-star text-warning" />
                                </li>
                              </ul>
                              <h6 className="text-primary">
                                - Jill Webb{" "}
                                <small className="text-muted">Designer</small>
                              </h6>
                            </div>
                          </div>
                        </div>
                        {/*end customer testi*/}
                      </div>
                    </div>
                  </div>
                  <div className="tns-nav" aria-label="Carousel Pagination">
                    <button
                      type="button"
                      data-nav={0}
                      aria-controls="tns1"
                      style={{}}
                      aria-label="Carousel Page 1 (Current Slide)"
                      className="tns-nav-active"
                    />
                    <button
                      type="button"
                      data-nav={1}
                      aria-controls="tns1"
                      style={{}}
                      aria-label="Carousel Page 2"
                      className=""
                      tabIndex={-1}
                    />
                    <button
                      type="button"
                      data-nav={2}
                      aria-controls="tns1"
                      style={{}}
                      aria-label="Carousel Page 3"
                      className=""
                      tabIndex={-1}
                    />
                    <button
                      type="button"
                      data-nav={3}
                      aria-controls="tns1"
                      style={{}}
                      aria-label="Carousel Page 4"
                      className=""
                      tabIndex={-1}
                    />
                    <button
                      type="button"
                      data-nav={4}
                      aria-controls="tns1"
                      style={{}}
                      aria-label="Carousel Page 5"
                      className=""
                      tabIndex={-1}
                    />
                    <button
                      type="button"
                      data-nav={5}
                      aria-controls="tns1"
                      style={{}}
                      aria-label="Carousel Page 6"
                      className=""
                      tabIndex={-1}
                    />
                  </div>
                </div>
                {/*end carousel*/}
                <div className="row justify-content-center mt-3">
                  <div className="col-md col-6 text-center pt-3">
                    <img
                      src="../assets/images/client/amazon.png"
                      className="avatar avatar-client"
                      alt=""
                    />
                  </div>
                  {/*end col*/}
                  <div className="col-md col-6 text-center pt-3">
                    <img
                      src="../assets/images/client/google.png"
                      className="avatar avatar-client"
                      alt=""
                    />
                  </div>
                  {/*end col*/}
                  <div className="col-md col-6 text-center pt-3">
                    <img
                      src="../assets/images/client/lenovo.png"
                      className="avatar avatar-client"
                      alt=""
                    />
                  </div>
                  {/*end col*/}
                  <div className="col-md col-6 text-center pt-3">
                    <img
                      src="../assets/images/client/paypal.png"
                      className="avatar avatar-client"
                      alt=""
                    />
                  </div>
                  {/*end col*/}
                </div>
                {/*end row*/}
              </div>
            </div>
          </div>
          {/*end col*/}
        </div>
        {/*end row*/}
        <div className="row">
          <div className="col-xl-3 col-md-6 mt-4">
            <div className="card features feature-primary text-center border-0 p-4 rounded shadow">
              <div className="icon text-center rounded-lg mx-auto">
                <i className="uil uil-message align-middle h3 mb-0" />
              </div>
              <div className="card-body p-0 mt-3">
                <a href="javascript:void(0)" className="title text-dark h5">
                  New Messages
                </a>
                <p className="text-muted my-2">
                  Due to its wide spread use as filler text
                </p>
                <a href="javascript:void(0)" className="link">
                  Read more <i className="ri-arrow-right-line align-middle" />
                </a>
              </div>
            </div>
          </div>
          {/*end col*/}
          <div className="col-xl-3 col-md-6 mt-4">
            <div className="card features feature-primary text-center border-0 p-4 rounded shadow">
              <div className="icon text-center rounded-lg mx-auto">
                <i className="uil uil-envelope-star align-middle h3 mb-0" />
              </div>
              <div className="card-body p-0 mt-3">
                <a href="javascript:void(0)" className="title text-dark h5">
                  Latest Proposals
                </a>
                <p className="text-muted my-2">
                  Due to its wide spread use as filler text
                </p>
                <a href="javascript:void(0)" className="link">
                  View more <i className="ri-arrow-right-line align-middle" />
                </a>
              </div>
            </div>
          </div>
          {/*end col*/}
          <div className="col-xl-3 col-md-6 mt-4">
            <div className="card features feature-primary text-center border-0 p-4 rounded shadow">
              <div className="icon text-center rounded-lg mx-auto">
                <i className="uil uil-hourglass align-middle h3 mb-0" />
              </div>
              <div className="card-body p-0 mt-3">
                <a href="javascript:void(0)" className="title text-dark h5">
                  Package Expiry
                </a>
                <p className="text-muted my-2">
                  Due to its wide spread use as filler text
                </p>
                <a href="javascript:void(0)" className="link">
                  Check here <i className="ri-arrow-right-line align-middle" />
                </a>
              </div>
            </div>
          </div>
          {/*end col*/}
          <div className="col-xl-3 col-md-6 mt-4">
            <div className="card features feature-primary text-center border-0 p-4 rounded shadow">
              <div className="icon text-center rounded-lg mx-auto">
                <i className="uil uil-heart align-middle h3 mb-0" />
              </div>
              <div className="card-body p-0 mt-3">
                <a href="javascript:void(0)" className="title text-dark h5">
                  Saved Items
                </a>
                <p className="text-muted my-2">
                  Due to its wide spread use as filler text
                </p>
                <a href="javascript:void(0)" className="link">
                  View items <i className="ri-arrow-right-line align-middle" />
                </a>
              </div>
            </div>
          </div>
          {/*end col*/}
        </div>
        {/*end row*/}
      </div>

    </>
  )
}

export default Dashboard