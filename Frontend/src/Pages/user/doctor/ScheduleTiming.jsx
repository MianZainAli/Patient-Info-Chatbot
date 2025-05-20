const ScheduleTiming = () => {
    return (<>
        <div className="col-xl-9 col-lg-8 col-md-7 mt-4 pt-2 mt-sm-0 pt-sm-0">
            <h5 className="mb-0">Schedule Timing</h5>
            <div className="row">
                <div className="col-xl-2 col-lg-4 col-12 mt-4">
                    <div id="external-events">
                        <div className="card border-0 p-4 shadow rounded">
                            <span className="h6">All Events</span>
                            <div className="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event">
                                <div className="fc-event-main">Metting</div>
                            </div>
                            <div className="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event">
                                <div className="fc-event-main">Operations</div>
                            </div>
                            <div className="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event">
                                <div className="fc-event-main">Lunch</div>
                            </div>
                            <div className="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event">
                                <div className="fc-event-main">Conference</div>
                            </div>
                            <div className="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event">
                                <div className="fc-event-main">Business Metting</div>
                            </div>
                            <div className="mt-2">
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        defaultValue=""
                                        id="drop-remove"
                                    />
                                    <label className="form-check-label" htmlFor="drop-remove">
                                        Remove after drop
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*end col*/}
                <div className="col-xl-10 col-lg-8 col-12 mt-4">
                    <div id="calendar-container" className="card rounded border-0 shadow p-4">
                        <div
                            id="calendar"
                            className="fc fc-media-screen fc-direction-ltr fc-theme-standard"
                        >
                            <div className="fc-header-toolbar fc-toolbar fc-toolbar-ltr">
                                <div className="fc-toolbar-chunk">
                                    <div className="fc-button-group">
                                        <button
                                            type="button"
                                            title="Previous month"
                                            aria-pressed="false"
                                            className="fc-prev-button fc-button fc-button-primary"
                                        >
                                            <span className="fc-icon fc-icon-chevron-left" />
                                        </button>
                                        <button
                                            type="button"
                                            title="Next month"
                                            aria-pressed="false"
                                            className="fc-next-button fc-button fc-button-primary"
                                        >
                                            <span className="fc-icon fc-icon-chevron-right" />
                                        </button>
                                    </div>
                                    <button
                                        type="button"
                                        title="This month"
                                        disabled=""
                                        aria-pressed="false"
                                        className="fc-today-button fc-button fc-button-primary"
                                    >
                                        today
                                    </button>
                                    <button
                                        type="button"
                                        title="Add Event"
                                        aria-pressed="false"
                                        className="fc-addEventButton-button fc-button fc-button-primary"
                                    >
                                        Add Event
                                    </button>
                                </div>
                                <div className="fc-toolbar-chunk">
                                    <h2 className="fc-toolbar-title" id="fc-dom-1">
                                        December 2024
                                    </h2>
                                </div>
                                <div className="fc-toolbar-chunk">
                                    <div className="fc-button-group">
                                        <button
                                            type="button"
                                            title="month view"
                                            aria-pressed="true"
                                            className="fc-dayGridMonth-button fc-button fc-button-primary fc-button-active"
                                        >
                                            month
                                        </button>
                                        <button
                                            type="button"
                                            title="week view"
                                            aria-pressed="false"
                                            className="fc-timeGridWeek-button fc-button fc-button-primary"
                                        >
                                            week
                                        </button>
                                        <button
                                            type="button"
                                            title="day view"
                                            aria-pressed="false"
                                            className="fc-timeGridDay-button fc-button fc-button-primary"
                                        >
                                            day
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div
                                aria-labelledby="fc-dom-1"
                                className="fc-view-harness fc-view-harness-active"
                                style={{ height: "504.444px" }}
                            >
                                <div className="fc-daygrid fc-dayGridMonth-view fc-view">
                                    <table
                                        role="grid"
                                        className="fc-scrollgrid  fc-scrollgrid-liquid"
                                    >
                                        <thead role="rowgroup">
                                            <tr
                                                role="presentation"
                                                className="fc-scrollgrid-section fc-scrollgrid-section-header "
                                            >
                                                <th role="presentation">
                                                    <div className="fc-scroller-harness">
                                                        <div
                                                            className="fc-scroller"
                                                            style={{ overflow: "hidden" }}
                                                        >
                                                            <table
                                                                role="presentation"
                                                                className="fc-col-header "
                                                                style={{ width: 680 }}
                                                            >
                                                                <colgroup />
                                                                <thead role="presentation">
                                                                    <tr role="row">
                                                                        <th
                                                                            role="columnheader"
                                                                            className="fc-col-header-cell fc-day fc-day-sun"
                                                                        >
                                                                            <div className="fc-scrollgrid-sync-inner">
                                                                                <a
                                                                                    aria-label="Sunday"
                                                                                    className="fc-col-header-cell-cushion "
                                                                                >
                                                                                    Sun
                                                                                </a>
                                                                            </div>
                                                                        </th>
                                                                        <th
                                                                            role="columnheader"
                                                                            className="fc-col-header-cell fc-day fc-day-mon"
                                                                        >
                                                                            <div className="fc-scrollgrid-sync-inner">
                                                                                <a
                                                                                    aria-label="Monday"
                                                                                    className="fc-col-header-cell-cushion "
                                                                                >
                                                                                    Mon
                                                                                </a>
                                                                            </div>
                                                                        </th>
                                                                        <th
                                                                            role="columnheader"
                                                                            className="fc-col-header-cell fc-day fc-day-tue"
                                                                        >
                                                                            <div className="fc-scrollgrid-sync-inner">
                                                                                <a
                                                                                    aria-label="Tuesday"
                                                                                    className="fc-col-header-cell-cushion "
                                                                                >
                                                                                    Tue
                                                                                </a>
                                                                            </div>
                                                                        </th>
                                                                        <th
                                                                            role="columnheader"
                                                                            className="fc-col-header-cell fc-day fc-day-wed"
                                                                        >
                                                                            <div className="fc-scrollgrid-sync-inner">
                                                                                <a
                                                                                    aria-label="Wednesday"
                                                                                    className="fc-col-header-cell-cushion "
                                                                                >
                                                                                    Wed
                                                                                </a>
                                                                            </div>
                                                                        </th>
                                                                        <th
                                                                            role="columnheader"
                                                                            className="fc-col-header-cell fc-day fc-day-thu"
                                                                        >
                                                                            <div className="fc-scrollgrid-sync-inner">
                                                                                <a
                                                                                    aria-label="Thursday"
                                                                                    className="fc-col-header-cell-cushion "
                                                                                >
                                                                                    Thu
                                                                                </a>
                                                                            </div>
                                                                        </th>
                                                                        <th
                                                                            role="columnheader"
                                                                            className="fc-col-header-cell fc-day fc-day-fri"
                                                                        >
                                                                            <div className="fc-scrollgrid-sync-inner">
                                                                                <a
                                                                                    aria-label="Friday"
                                                                                    className="fc-col-header-cell-cushion "
                                                                                >
                                                                                    Fri
                                                                                </a>
                                                                            </div>
                                                                        </th>
                                                                        <th
                                                                            role="columnheader"
                                                                            className="fc-col-header-cell fc-day fc-day-sat"
                                                                        >
                                                                            <div className="fc-scrollgrid-sync-inner">
                                                                                <a
                                                                                    aria-label="Saturday"
                                                                                    className="fc-col-header-cell-cushion "
                                                                                >
                                                                                    Sat
                                                                                </a>
                                                                            </div>
                                                                        </th>
                                                                    </tr>
                                                                </thead>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody role="rowgroup">
                                            <tr
                                                role="presentation"
                                                className="fc-scrollgrid-section fc-scrollgrid-section-body  fc-scrollgrid-section-liquid"
                                            >
                                                <td role="presentation">
                                                    <div className="fc-scroller-harness fc-scroller-harness-liquid">
                                                        <div
                                                            className="fc-scroller fc-scroller-liquid-absolute"
                                                            style={{ overflow: "hidden auto" }}
                                                        >
                                                            <div
                                                                className="fc-daygrid-body fc-daygrid-body-unbalanced "
                                                                style={{ width: 680 }}
                                                            >
                                                                <table
                                                                    role="presentation"
                                                                    className="fc-scrollgrid-sync-table"
                                                                    style={{ width: 680, height: 464 }}
                                                                >
                                                                    <colgroup />
                                                                    <tbody role="presentation">
                                                                        <tr role="row">
                                                                            <td
                                                                                role="gridcell"
                                                                                className="fc-daygrid-day fc-day fc-day-sun fc-day-past"
                                                                                data-date="2024-12-01"
                                                                                aria-labelledby="fc-dom-2"
                                                                            >
                                                                                <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                                    <div className="fc-daygrid-day-top">
                                                                                        <a
                                                                                            id="fc-dom-2"
                                                                                            className="fc-daygrid-day-number"
                                                                                            aria-label="December 1, 2024"
                                                                                        >
                                                                                            1
                                                                                        </a>
                                                                                    </div>
                                                                                    <div className="fc-daygrid-day-events">
                                                                                        <div
                                                                                            className="fc-daygrid-day-bottom"
                                                                                            style={{ marginTop: 0 }}
                                                                                        />
                                                                                    </div>
                                                                                    <div className="fc-daygrid-day-bg">
                                                                                        <div
                                                                                            className="fc-daygrid-bg-harness"
                                                                                            style={{ left: 0, right: 0 }}
                                                                                        >
                                                                                            <div className="fc-non-business" />
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                            <td
                                                                                role="gridcell"
                                                                                className="fc-daygrid-day fc-day fc-day-mon fc-day-past"
                                                                                data-date="2024-12-02"
                                                                                aria-labelledby="fc-dom-4"
                                                                            >
                                                                                <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                                    <div className="fc-daygrid-day-top">
                                                                                        <a
                                                                                            id="fc-dom-4"
                                                                                            className="fc-daygrid-day-number"
                                                                                            aria-label="December 2, 2024"
                                                                                        >
                                                                                            2
                                                                                        </a>
                                                                                    </div>
                                                                                    <div className="fc-daygrid-day-events">
                                                                                        <div
                                                                                            className="fc-daygrid-day-bottom"
                                                                                            style={{ marginTop: 0 }}
                                                                                        />
                                                                                    </div>
                                                                                    <div className="fc-daygrid-day-bg" />
                                                                                </div>
                                                                            </td>
                                                                            <td
                                                                                role="gridcell"
                                                                                className="fc-daygrid-day fc-day fc-day-tue fc-day-past"
                                                                                data-date="2024-12-03"
                                                                                aria-labelledby="fc-dom-6"
                                                                            >
                                                                                <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                                    <div className="fc-daygrid-day-top">
                                                                                        <a
                                                                                            id="fc-dom-6"
                                                                                            className="fc-daygrid-day-number"
                                                                                            aria-label="December 3, 2024"
                                                                                        >
                                                                                            3
                                                                                        </a>
                                                                                    </div>
                                                                                    <div className="fc-daygrid-day-events">
                                                                                        <div
                                                                                            className="fc-daygrid-day-bottom"
                                                                                            style={{ marginTop: 0 }}
                                                                                        />
                                                                                    </div>
                                                                                    <div className="fc-daygrid-day-bg" />
                                                                                </div>
                                                                            </td>
                                                                            <td
                                                                                role="gridcell"
                                                                                className="fc-daygrid-day fc-day fc-day-wed fc-day-past"
                                                                                data-date="2024-12-04"
                                                                                aria-labelledby="fc-dom-8"
                                                                            >
                                                                                <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                                    <div className="fc-daygrid-day-top">
                                                                                        <a
                                                                                            id="fc-dom-8"
                                                                                            className="fc-daygrid-day-number"
                                                                                            aria-label="December 4, 2024"
                                                                                        >
                                                                                            4
                                                                                        </a>
                                                                                    </div>
                                                                                    <div className="fc-daygrid-day-events">
                                                                                        <div
                                                                                            className="fc-daygrid-day-bottom"
                                                                                            style={{ marginTop: 0 }}
                                                                                        />
                                                                                    </div>
                                                                                    <div className="fc-daygrid-day-bg" />
                                                                                </div>
                                                                            </td>
                                                                            <td
                                                                                role="gridcell"
                                                                                className="fc-daygrid-day fc-day fc-day-thu fc-day-today "
                                                                                data-date="2024-12-05"
                                                                                aria-labelledby="fc-dom-10"
                                                                            >
                                                                                <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                                    <div className="fc-daygrid-day-top">
                                                                                        <a
                                                                                            id="fc-dom-10"
                                                                                            className="fc-daygrid-day-number"
                                                                                            aria-label="December 5, 2024"
                                                                                        >
                                                                                            5
                                                                                        </a>
                                                                                    </div>
                                                                                    <div className="fc-daygrid-day-events">
                                                                                        <div
                                                                                            className="fc-daygrid-day-bottom"
                                                                                            style={{ marginTop: 0 }}
                                                                                        />
                                                                                    </div>
                                                                                    <div className="fc-daygrid-day-bg" />
                                                                                </div>
                                                                            </td>
                                                                            <td
                                                                                role="gridcell"
                                                                                className="fc-daygrid-day fc-day fc-day-fri fc-day-future"
                                                                                data-date="2024-12-06"
                                                                                aria-labelledby="fc-dom-12"
                                                                            >
                                                                                <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                                    <div className="fc-daygrid-day-top">
                                                                                        <a
                                                                                            id="fc-dom-12"
                                                                                            className="fc-daygrid-day-number"
                                                                                            aria-label="December 6, 2024"
                                                                                        >
                                                                                            6
                                                                                        </a>
                                                                                    </div>
                                                                                    <div className="fc-daygrid-day-events">
                                                                                        <div
                                                                                            className="fc-daygrid-day-bottom"
                                                                                            style={{ marginTop: 0 }}
                                                                                        />
                                                                                    </div>
                                                                                    <div className="fc-daygrid-day-bg" />
                                                                                </div>
                                                                            </td>
                                                                            <td
                                                                                role="gridcell"
                                                                                className="fc-daygrid-day fc-day fc-day-sat fc-day-future"
                                                                                data-date="2024-12-07"
                                                                                aria-labelledby="fc-dom-14"
                                                                            >
                                                                                <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                                    <div className="fc-daygrid-day-top">
                                                                                        <a
                                                                                            id="fc-dom-14"
                                                                                            className="fc-daygrid-day-number"
                                                                                            aria-label="December 7, 2024"
                                                                                        >
                                                                                            7
                                                                                        </a>
                                                                                    </div>
                                                                                    <div className="fc-daygrid-day-events">
                                                                                        <div
                                                                                            className="fc-daygrid-day-bottom"
                                                                                            style={{ marginTop: 0 }}
                                                                                        />
                                                                                    </div>
                                                                                    <div className="fc-daygrid-day-bg">
                                                                                        <div
                                                                                            className="fc-daygrid-bg-harness"
                                                                                            style={{ left: 0, right: 0 }}
                                                                                        >
                                                                                            <div className="fc-non-business" />
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                        <tr role="row">
                                                                            <td
                                                                                role="gridcell"
                                                                                className="fc-daygrid-day fc-day fc-day-sun fc-day-future"
                                                                                data-date="2024-12-08"
                                                                                aria-labelledby="fc-dom-16"
                                                                            >
                                                                                <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                                    <div className="fc-daygrid-day-top">
                                                                                        <a
                                                                                            id="fc-dom-16"
                                                                                            className="fc-daygrid-day-number"
                                                                                            aria-label="December 8, 2024"
                                                                                        >
                                                                                            8
                                                                                        </a>
                                                                                    </div>
                                                                                    <div className="fc-daygrid-day-events">
                                                                                        <div
                                                                                            className="fc-daygrid-day-bottom"
                                                                                            style={{ marginTop: 0 }}
                                                                                        />
                                                                                    </div>
                                                                                    <div className="fc-daygrid-day-bg">
                                                                                        <div
                                                                                            className="fc-daygrid-bg-harness"
                                                                                            style={{ left: 0, right: 0 }}
                                                                                        >
                                                                                            <div className="fc-non-business" />
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                            <td
                                                                                role="gridcell"
                                                                                className="fc-daygrid-day fc-day fc-day-mon fc-day-future"
                                                                                data-date="2024-12-09"
                                                                                aria-labelledby="fc-dom-18"
                                                                            >
                                                                                <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                                    <div className="fc-daygrid-day-top">
                                                                                        <a
                                                                                            id="fc-dom-18"
                                                                                            className="fc-daygrid-day-number"
                                                                                            aria-label="December 9, 2024"
                                                                                        >
                                                                                            9
                                                                                        </a>
                                                                                    </div>
                                                                                    <div className="fc-daygrid-day-events">
                                                                                        <div
                                                                                            className="fc-daygrid-day-bottom"
                                                                                            style={{ marginTop: 0 }}
                                                                                        />
                                                                                    </div>
                                                                                    <div className="fc-daygrid-day-bg" />
                                                                                </div>
                                                                            </td>
                                                                            <td
                                                                                role="gridcell"
                                                                                className="fc-daygrid-day fc-day fc-day-tue fc-day-future"
                                                                                data-date="2024-12-10"
                                                                                aria-labelledby="fc-dom-20"
                                                                            >
                                                                                <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                                    <div className="fc-daygrid-day-top">
                                                                                        <a
                                                                                            id="fc-dom-20"
                                                                                            className="fc-daygrid-day-number"
                                                                                            aria-label="December 10, 2024"
                                                                                        >
                                                                                            10
                                                                                        </a>
                                                                                    </div>
                                                                                    <div className="fc-daygrid-day-events">
                                                                                        <div
                                                                                            className="fc-daygrid-day-bottom"
                                                                                            style={{ marginTop: 0 }}
                                                                                        />
                                                                                    </div>
                                                                                    <div className="fc-daygrid-day-bg" />
                                                                                </div>
                                                                            </td>
                                                                            <td
                                                                                role="gridcell"
                                                                                className="fc-daygrid-day fc-day fc-day-wed fc-day-future"
                                                                                data-date="2024-12-11"
                                                                                aria-labelledby="fc-dom-22"
                                                                            >
                                                                                <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                                    <div className="fc-daygrid-day-top">
                                                                                        <a
                                                                                            id="fc-dom-22"
                                                                                            className="fc-daygrid-day-number"
                                                                                            aria-label="December 11, 2024"
                                                                                        >
                                                                                            11
                                                                                        </a>
                                                                                    </div>
                                                                                    <div className="fc-daygrid-day-events">
                                                                                        <div
                                                                                            className="fc-daygrid-day-bottom"
                                                                                            style={{ marginTop: 0 }}
                                                                                        />
                                                                                    </div>
                                                                                    <div className="fc-daygrid-day-bg" />
                                                                                </div>
                                                                            </td>
                                                                            <td
                                                                                role="gridcell"
                                                                                className="fc-daygrid-day fc-day fc-day-thu fc-day-future"
                                                                                data-date="2024-12-12"
                                                                                aria-labelledby="fc-dom-24"
                                                                            >
                                                                                <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                                    <div className="fc-daygrid-day-top">
                                                                                        <a
                                                                                            id="fc-dom-24"
                                                                                            className="fc-daygrid-day-number"
                                                                                            aria-label="December 12, 2024"
                                                                                        >
                                                                                            12
                                                                                        </a>
                                                                                    </div>
                                                                                    <div className="fc-daygrid-day-events">
                                                                                        <div
                                                                                            className="fc-daygrid-day-bottom"
                                                                                            style={{ marginTop: 0 }}
                                                                                        />
                                                                                    </div>
                                                                                    <div className="fc-daygrid-day-bg" />
                                                                                </div>
                                                                            </td>
                                                                            <td
                                                                                role="gridcell"
                                                                                className="fc-daygrid-day fc-day fc-day-fri fc-day-future"
                                                                                data-date="2024-12-13"
                                                                                aria-labelledby="fc-dom-26"
                                                                            >
                                                                                <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                                    <div className="fc-daygrid-day-top">
                                                                                        <a
                                                                                            id="fc-dom-26"
                                                                                            className="fc-daygrid-day-number"
                                                                                            aria-label="December 13, 2024"
                                                                                        >
                                                                                            13
                                                                                        </a>
                                                                                    </div>
                                                                                    <div className="fc-daygrid-day-events">
                                                                                        <div
                                                                                            className="fc-daygrid-day-bottom"
                                                                                            style={{ marginTop: 0 }}
                                                                                        />
                                                                                    </div>
                                                                                    <div className="fc-daygrid-day-bg" />
                                                                                </div>
                                                                            </td>
                                                                            <td
                                                                                role="gridcell"
                                                                                className="fc-daygrid-day fc-day fc-day-sat fc-day-future"
                                                                                data-date="2024-12-14"
                                                                                aria-labelledby="fc-dom-28"
                                                                            >
                                                                                <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                                    <div className="fc-daygrid-day-top">
                                                                                        <a
                                                                                            id="fc-dom-28"
                                                                                            className="fc-daygrid-day-number"
                                                                                            aria-label="December 14, 2024"
                                                                                        >
                                                                                            14
                                                                                        </a>
                                                                                    </div>
                                                                                    <div className="fc-daygrid-day-events">
                                                                                        <div
                                                                                            className="fc-daygrid-day-bottom"
                                                                                            style={{ marginTop: 0 }}
                                                                                        />
                                                                                    </div>
                                                                                    <div className="fc-daygrid-day-bg">
                                                                                        <div
                                                                                            className="fc-daygrid-bg-harness"
                                                                                            style={{ left: 0, right: 0 }}
                                                                                        >
                                                                                            <div className="fc-non-business" />
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                        <tr role="row">
                                                                            <td
                                                                                role="gridcell"
                                                                                className="fc-daygrid-day fc-day fc-day-sun fc-day-future"
                                                                                data-date="2024-12-15"
                                                                                aria-labelledby="fc-dom-30"
                                                                            >
                                                                                <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                                    <div className="fc-daygrid-day-top">
                                                                                        <a
                                                                                            id="fc-dom-30"
                                                                                            className="fc-daygrid-day-number"
                                                                                            aria-label="December 15, 2024"
                                                                                        >
                                                                                            15
                                                                                        </a>
                                                                                    </div>
                                                                                    <div className="fc-daygrid-day-events">
                                                                                        <div
                                                                                            className="fc-daygrid-day-bottom"
                                                                                            style={{ marginTop: 0 }}
                                                                                        />
                                                                                    </div>
                                                                                    <div className="fc-daygrid-day-bg">
                                                                                        <div
                                                                                            className="fc-daygrid-bg-harness"
                                                                                            style={{ left: 0, right: 0 }}
                                                                                        >
                                                                                            <div className="fc-non-business" />
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                            <td
                                                                                role="gridcell"
                                                                                className="fc-daygrid-day fc-day fc-day-mon fc-day-future"
                                                                                data-date="2024-12-16"
                                                                                aria-labelledby="fc-dom-32"
                                                                            >
                                                                                <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                                    <div className="fc-daygrid-day-top">
                                                                                        <a
                                                                                            id="fc-dom-32"
                                                                                            className="fc-daygrid-day-number"
                                                                                            aria-label="December 16, 2024"
                                                                                        >
                                                                                            16
                                                                                        </a>
                                                                                    </div>
                                                                                    <div className="fc-daygrid-day-events">
                                                                                        <div
                                                                                            className="fc-daygrid-day-bottom"
                                                                                            style={{ marginTop: 0 }}
                                                                                        />
                                                                                    </div>
                                                                                    <div className="fc-daygrid-day-bg" />
                                                                                </div>
                                                                            </td>
                                                                            <td
                                                                                role="gridcell"
                                                                                className="fc-daygrid-day fc-day fc-day-tue fc-day-future"
                                                                                data-date="2024-12-17"
                                                                                aria-labelledby="fc-dom-34"
                                                                            >
                                                                                <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                                    <div className="fc-daygrid-day-top">
                                                                                        <a
                                                                                            id="fc-dom-34"
                                                                                            className="fc-daygrid-day-number"
                                                                                            aria-label="December 17, 2024"
                                                                                        >
                                                                                            17
                                                                                        </a>
                                                                                    </div>
                                                                                    <div className="fc-daygrid-day-events">
                                                                                        <div
                                                                                            className="fc-daygrid-day-bottom"
                                                                                            style={{ marginTop: 0 }}
                                                                                        />
                                                                                    </div>
                                                                                    <div className="fc-daygrid-day-bg" />
                                                                                </div>
                                                                            </td>
                                                                            <td
                                                                                role="gridcell"
                                                                                className="fc-daygrid-day fc-day fc-day-wed fc-day-future"
                                                                                data-date="2024-12-18"
                                                                                aria-labelledby="fc-dom-36"
                                                                            >
                                                                                <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                                    <div className="fc-daygrid-day-top">
                                                                                        <a
                                                                                            id="fc-dom-36"
                                                                                            className="fc-daygrid-day-number"
                                                                                            aria-label="December 18, 2024"
                                                                                        >
                                                                                            18
                                                                                        </a>
                                                                                    </div>
                                                                                    <div className="fc-daygrid-day-events">
                                                                                        <div
                                                                                            className="fc-daygrid-day-bottom"
                                                                                            style={{ marginTop: 0 }}
                                                                                        />
                                                                                    </div>
                                                                                    <div className="fc-daygrid-day-bg" />
                                                                                </div>
                                                                            </td>
                                                                            <td
                                                                                role="gridcell"
                                                                                className="fc-daygrid-day fc-day fc-day-thu fc-day-future"
                                                                                data-date="2024-12-19"
                                                                                aria-labelledby="fc-dom-38"
                                                                            >
                                                                                <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                                    <div className="fc-daygrid-day-top">
                                                                                        <a
                                                                                            id="fc-dom-38"
                                                                                            className="fc-daygrid-day-number"
                                                                                            aria-label="December 19, 2024"
                                                                                        >
                                                                                            19
                                                                                        </a>
                                                                                    </div>
                                                                                    <div className="fc-daygrid-day-events">
                                                                                        <div
                                                                                            className="fc-daygrid-day-bottom"
                                                                                            style={{ marginTop: 0 }}
                                                                                        />
                                                                                    </div>
                                                                                    <div className="fc-daygrid-day-bg" />
                                                                                </div>
                                                                            </td>
                                                                            <td
                                                                                role="gridcell"
                                                                                className="fc-daygrid-day fc-day fc-day-fri fc-day-future"
                                                                                data-date="2024-12-20"
                                                                                aria-labelledby="fc-dom-40"
                                                                            >
                                                                                <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                                    <div className="fc-daygrid-day-top">
                                                                                        <a
                                                                                            id="fc-dom-40"
                                                                                            className="fc-daygrid-day-number"
                                                                                            aria-label="December 20, 2024"
                                                                                        >
                                                                                            20
                                                                                        </a>
                                                                                    </div>
                                                                                    <div className="fc-daygrid-day-events">
                                                                                        <div
                                                                                            className="fc-daygrid-day-bottom"
                                                                                            style={{ marginTop: 0 }}
                                                                                        />
                                                                                    </div>
                                                                                    <div className="fc-daygrid-day-bg" />
                                                                                </div>
                                                                            </td>
                                                                            <td
                                                                                role="gridcell"
                                                                                className="fc-daygrid-day fc-day fc-day-sat fc-day-future"
                                                                                data-date="2024-12-21"
                                                                                aria-labelledby="fc-dom-42"
                                                                            >
                                                                                <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                                    <div className="fc-daygrid-day-top">
                                                                                        <a
                                                                                            id="fc-dom-42"
                                                                                            className="fc-daygrid-day-number"
                                                                                            aria-label="December 21, 2024"
                                                                                        >
                                                                                            21
                                                                                        </a>
                                                                                    </div>
                                                                                    <div className="fc-daygrid-day-events">
                                                                                        <div
                                                                                            className="fc-daygrid-day-bottom"
                                                                                            style={{ marginTop: 0 }}
                                                                                        />
                                                                                    </div>
                                                                                    <div className="fc-daygrid-day-bg">
                                                                                        <div
                                                                                            className="fc-daygrid-bg-harness"
                                                                                            style={{ left: 0, right: 0 }}
                                                                                        >
                                                                                            <div className="fc-non-business" />
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                        <tr role="row">
                                                                            <td
                                                                                role="gridcell"
                                                                                className="fc-daygrid-day fc-day fc-day-sun fc-day-future"
                                                                                data-date="2024-12-22"
                                                                                aria-labelledby="fc-dom-44"
                                                                            >
                                                                                <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                                    <div className="fc-daygrid-day-top">
                                                                                        <a
                                                                                            id="fc-dom-44"
                                                                                            className="fc-daygrid-day-number"
                                                                                            aria-label="December 22, 2024"
                                                                                        >
                                                                                            22
                                                                                        </a>
                                                                                    </div>
                                                                                    <div className="fc-daygrid-day-events">
                                                                                        <div
                                                                                            className="fc-daygrid-day-bottom"
                                                                                            style={{ marginTop: 0 }}
                                                                                        />
                                                                                    </div>
                                                                                    <div className="fc-daygrid-day-bg">
                                                                                        <div
                                                                                            className="fc-daygrid-bg-harness"
                                                                                            style={{ left: 0, right: 0 }}
                                                                                        >
                                                                                            <div className="fc-non-business" />
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                            <td
                                                                                role="gridcell"
                                                                                className="fc-daygrid-day fc-day fc-day-mon fc-day-future"
                                                                                data-date="2024-12-23"
                                                                                aria-labelledby="fc-dom-46"
                                                                            >
                                                                                <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                                    <div className="fc-daygrid-day-top">
                                                                                        <a
                                                                                            id="fc-dom-46"
                                                                                            className="fc-daygrid-day-number"
                                                                                            aria-label="December 23, 2024"
                                                                                        >
                                                                                            23
                                                                                        </a>
                                                                                    </div>
                                                                                    <div className="fc-daygrid-day-events">
                                                                                        <div
                                                                                            className="fc-daygrid-day-bottom"
                                                                                            style={{ marginTop: 0 }}
                                                                                        />
                                                                                    </div>
                                                                                    <div className="fc-daygrid-day-bg" />
                                                                                </div>
                                                                            </td>
                                                                            <td
                                                                                role="gridcell"
                                                                                className="fc-daygrid-day fc-day fc-day-tue fc-day-future"
                                                                                data-date="2024-12-24"
                                                                                aria-labelledby="fc-dom-48"
                                                                            >
                                                                                <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                                    <div className="fc-daygrid-day-top">
                                                                                        <a
                                                                                            id="fc-dom-48"
                                                                                            className="fc-daygrid-day-number"
                                                                                            aria-label="December 24, 2024"
                                                                                        >
                                                                                            24
                                                                                        </a>
                                                                                    </div>
                                                                                    <div className="fc-daygrid-day-events">
                                                                                        <div
                                                                                            className="fc-daygrid-day-bottom"
                                                                                            style={{ marginTop: 0 }}
                                                                                        />
                                                                                    </div>
                                                                                    <div className="fc-daygrid-day-bg" />
                                                                                </div>
                                                                            </td>
                                                                            <td
                                                                                role="gridcell"
                                                                                className="fc-daygrid-day fc-day fc-day-wed fc-day-future"
                                                                                data-date="2024-12-25"
                                                                                aria-labelledby="fc-dom-50"
                                                                            >
                                                                                <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                                    <div className="fc-daygrid-day-top">
                                                                                        <a
                                                                                            id="fc-dom-50"
                                                                                            className="fc-daygrid-day-number"
                                                                                            aria-label="December 25, 2024"
                                                                                        >
                                                                                            25
                                                                                        </a>
                                                                                    </div>
                                                                                    <div className="fc-daygrid-day-events">
                                                                                        <div
                                                                                            className="fc-daygrid-day-bottom"
                                                                                            style={{ marginTop: 0 }}
                                                                                        />
                                                                                    </div>
                                                                                    <div className="fc-daygrid-day-bg" />
                                                                                </div>
                                                                            </td>
                                                                            <td
                                                                                role="gridcell"
                                                                                className="fc-daygrid-day fc-day fc-day-thu fc-day-future"
                                                                                data-date="2024-12-26"
                                                                                aria-labelledby="fc-dom-52"
                                                                            >
                                                                                <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                                    <div className="fc-daygrid-day-top">
                                                                                        <a
                                                                                            id="fc-dom-52"
                                                                                            className="fc-daygrid-day-number"
                                                                                            aria-label="December 26, 2024"
                                                                                        >
                                                                                            26
                                                                                        </a>
                                                                                    </div>
                                                                                    <div className="fc-daygrid-day-events">
                                                                                        <div
                                                                                            className="fc-daygrid-day-bottom"
                                                                                            style={{ marginTop: 0 }}
                                                                                        />
                                                                                    </div>
                                                                                    <div className="fc-daygrid-day-bg" />
                                                                                </div>
                                                                            </td>
                                                                            <td
                                                                                role="gridcell"
                                                                                className="fc-daygrid-day fc-day fc-day-fri fc-day-future"
                                                                                data-date="2024-12-27"
                                                                                aria-labelledby="fc-dom-54"
                                                                            >
                                                                                <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                                    <div className="fc-daygrid-day-top">
                                                                                        <a
                                                                                            id="fc-dom-54"
                                                                                            className="fc-daygrid-day-number"
                                                                                            aria-label="December 27, 2024"
                                                                                        >
                                                                                            27
                                                                                        </a>
                                                                                    </div>
                                                                                    <div className="fc-daygrid-day-events">
                                                                                        <div
                                                                                            className="fc-daygrid-day-bottom"
                                                                                            style={{ marginTop: 0 }}
                                                                                        />
                                                                                    </div>
                                                                                    <div className="fc-daygrid-day-bg" />
                                                                                </div>
                                                                            </td>
                                                                            <td
                                                                                role="gridcell"
                                                                                className="fc-daygrid-day fc-day fc-day-sat fc-day-future"
                                                                                data-date="2024-12-28"
                                                                                aria-labelledby="fc-dom-56"
                                                                            >
                                                                                <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                                    <div className="fc-daygrid-day-top">
                                                                                        <a
                                                                                            id="fc-dom-56"
                                                                                            className="fc-daygrid-day-number"
                                                                                            aria-label="December 28, 2024"
                                                                                        >
                                                                                            28
                                                                                        </a>
                                                                                    </div>
                                                                                    <div className="fc-daygrid-day-events">
                                                                                        <div
                                                                                            className="fc-daygrid-day-bottom"
                                                                                            style={{ marginTop: 0 }}
                                                                                        />
                                                                                    </div>
                                                                                    <div className="fc-daygrid-day-bg">
                                                                                        <div
                                                                                            className="fc-daygrid-bg-harness"
                                                                                            style={{ left: 0, right: 0 }}
                                                                                        >
                                                                                            <div className="fc-non-business" />
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                        <tr role="row">
                                                                            <td
                                                                                role="gridcell"
                                                                                className="fc-daygrid-day fc-day fc-day-sun fc-day-future"
                                                                                data-date="2024-12-29"
                                                                                aria-labelledby="fc-dom-58"
                                                                            >
                                                                                <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                                    <div className="fc-daygrid-day-top">
                                                                                        <a
                                                                                            id="fc-dom-58"
                                                                                            className="fc-daygrid-day-number"
                                                                                            aria-label="December 29, 2024"
                                                                                        >
                                                                                            29
                                                                                        </a>
                                                                                    </div>
                                                                                    <div className="fc-daygrid-day-events">
                                                                                        <div
                                                                                            className="fc-daygrid-day-bottom"
                                                                                            style={{ marginTop: 0 }}
                                                                                        />
                                                                                    </div>
                                                                                    <div className="fc-daygrid-day-bg">
                                                                                        <div
                                                                                            className="fc-daygrid-bg-harness"
                                                                                            style={{ left: 0, right: 0 }}
                                                                                        >
                                                                                            <div className="fc-non-business" />
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                            <td
                                                                                role="gridcell"
                                                                                className="fc-daygrid-day fc-day fc-day-mon fc-day-future"
                                                                                data-date="2024-12-30"
                                                                                aria-labelledby="fc-dom-60"
                                                                            >
                                                                                <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                                    <div className="fc-daygrid-day-top">
                                                                                        <a
                                                                                            id="fc-dom-60"
                                                                                            className="fc-daygrid-day-number"
                                                                                            aria-label="December 30, 2024"
                                                                                        >
                                                                                            30
                                                                                        </a>
                                                                                    </div>
                                                                                    <div className="fc-daygrid-day-events">
                                                                                        <div
                                                                                            className="fc-daygrid-day-bottom"
                                                                                            style={{ marginTop: 0 }}
                                                                                        />
                                                                                    </div>
                                                                                    <div className="fc-daygrid-day-bg" />
                                                                                </div>
                                                                            </td>
                                                                            <td
                                                                                role="gridcell"
                                                                                className="fc-daygrid-day fc-day fc-day-tue fc-day-future"
                                                                                data-date="2024-12-31"
                                                                                aria-labelledby="fc-dom-62"
                                                                            >
                                                                                <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                                    <div className="fc-daygrid-day-top">
                                                                                        <a
                                                                                            id="fc-dom-62"
                                                                                            className="fc-daygrid-day-number"
                                                                                            aria-label="December 31, 2024"
                                                                                        >
                                                                                            31
                                                                                        </a>
                                                                                    </div>
                                                                                    <div className="fc-daygrid-day-events">
                                                                                        <div
                                                                                            className="fc-daygrid-day-bottom"
                                                                                            style={{ marginTop: 0 }}
                                                                                        />
                                                                                    </div>
                                                                                    <div className="fc-daygrid-day-bg" />
                                                                                </div>
                                                                            </td>
                                                                            <td
                                                                                role="gridcell"
                                                                                className="fc-daygrid-day fc-day fc-day-wed fc-day-future fc-day-other"
                                                                                data-date="2025-01-01"
                                                                                aria-labelledby="fc-dom-64"
                                                                            >
                                                                                <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                                    <div className="fc-daygrid-day-top">
                                                                                        <a
                                                                                            id="fc-dom-64"
                                                                                            className="fc-daygrid-day-number"
                                                                                            aria-label="January 1, 2025"
                                                                                        >
                                                                                            1
                                                                                        </a>
                                                                                    </div>
                                                                                    <div className="fc-daygrid-day-events">
                                                                                        <div
                                                                                            className="fc-daygrid-day-bottom"
                                                                                            style={{ marginTop: 0 }}
                                                                                        />
                                                                                    </div>
                                                                                    <div className="fc-daygrid-day-bg" />
                                                                                </div>
                                                                            </td>
                                                                            <td
                                                                                role="gridcell"
                                                                                className="fc-daygrid-day fc-day fc-day-thu fc-day-future fc-day-other"
                                                                                data-date="2025-01-02"
                                                                                aria-labelledby="fc-dom-66"
                                                                            >
                                                                                <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                                    <div className="fc-daygrid-day-top">
                                                                                        <a
                                                                                            id="fc-dom-66"
                                                                                            className="fc-daygrid-day-number"
                                                                                            aria-label="January 2, 2025"
                                                                                        >
                                                                                            2
                                                                                        </a>
                                                                                    </div>
                                                                                    <div className="fc-daygrid-day-events">
                                                                                        <div
                                                                                            className="fc-daygrid-day-bottom"
                                                                                            style={{ marginTop: 0 }}
                                                                                        />
                                                                                    </div>
                                                                                    <div className="fc-daygrid-day-bg" />
                                                                                </div>
                                                                            </td>
                                                                            <td
                                                                                role="gridcell"
                                                                                className="fc-daygrid-day fc-day fc-day-fri fc-day-future fc-day-other"
                                                                                data-date="2025-01-03"
                                                                                aria-labelledby="fc-dom-68"
                                                                            >
                                                                                <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                                    <div className="fc-daygrid-day-top">
                                                                                        <a
                                                                                            id="fc-dom-68"
                                                                                            className="fc-daygrid-day-number"
                                                                                            aria-label="January 3, 2025"
                                                                                        >
                                                                                            3
                                                                                        </a>
                                                                                    </div>
                                                                                    <div className="fc-daygrid-day-events">
                                                                                        <div
                                                                                            className="fc-daygrid-day-bottom"
                                                                                            style={{ marginTop: 0 }}
                                                                                        />
                                                                                    </div>
                                                                                    <div className="fc-daygrid-day-bg" />
                                                                                </div>
                                                                            </td>
                                                                            <td
                                                                                role="gridcell"
                                                                                className="fc-daygrid-day fc-day fc-day-sat fc-day-future fc-day-other"
                                                                                data-date="2025-01-04"
                                                                                aria-labelledby="fc-dom-70"
                                                                            >
                                                                                <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                                    <div className="fc-daygrid-day-top">
                                                                                        <a
                                                                                            id="fc-dom-70"
                                                                                            className="fc-daygrid-day-number"
                                                                                            aria-label="January 4, 2025"
                                                                                        >
                                                                                            4
                                                                                        </a>
                                                                                    </div>
                                                                                    <div className="fc-daygrid-day-events">
                                                                                        <div
                                                                                            className="fc-daygrid-day-bottom"
                                                                                            style={{ marginTop: 0 }}
                                                                                        />
                                                                                    </div>
                                                                                    <div className="fc-daygrid-day-bg">
                                                                                        <div
                                                                                            className="fc-daygrid-bg-harness"
                                                                                            style={{ left: 0, right: 0 }}
                                                                                        >
                                                                                            <div className="fc-non-business" />
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                        <tr role="row">
                                                                            <td
                                                                                role="gridcell"
                                                                                className="fc-daygrid-day fc-day fc-day-sun fc-day-future fc-day-other"
                                                                                data-date="2025-01-05"
                                                                                aria-labelledby="fc-dom-72"
                                                                            >
                                                                                <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                                    <div className="fc-daygrid-day-top">
                                                                                        <a
                                                                                            id="fc-dom-72"
                                                                                            className="fc-daygrid-day-number"
                                                                                            aria-label="January 5, 2025"
                                                                                        >
                                                                                            5
                                                                                        </a>
                                                                                    </div>
                                                                                    <div className="fc-daygrid-day-events">
                                                                                        <div
                                                                                            className="fc-daygrid-day-bottom"
                                                                                            style={{ marginTop: 0 }}
                                                                                        />
                                                                                    </div>
                                                                                    <div className="fc-daygrid-day-bg">
                                                                                        <div
                                                                                            className="fc-daygrid-bg-harness"
                                                                                            style={{ left: 0, right: 0 }}
                                                                                        >
                                                                                            <div className="fc-non-business" />
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                            <td
                                                                                role="gridcell"
                                                                                className="fc-daygrid-day fc-day fc-day-mon fc-day-future fc-day-other"
                                                                                data-date="2025-01-06"
                                                                                aria-labelledby="fc-dom-74"
                                                                            >
                                                                                <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                                    <div className="fc-daygrid-day-top">
                                                                                        <a
                                                                                            id="fc-dom-74"
                                                                                            className="fc-daygrid-day-number"
                                                                                            aria-label="January 6, 2025"
                                                                                        >
                                                                                            6
                                                                                        </a>
                                                                                    </div>
                                                                                    <div className="fc-daygrid-day-events">
                                                                                        <div
                                                                                            className="fc-daygrid-day-bottom"
                                                                                            style={{ marginTop: 0 }}
                                                                                        />
                                                                                    </div>
                                                                                    <div className="fc-daygrid-day-bg" />
                                                                                </div>
                                                                            </td>
                                                                            <td
                                                                                role="gridcell"
                                                                                className="fc-daygrid-day fc-day fc-day-tue fc-day-future fc-day-other"
                                                                                data-date="2025-01-07"
                                                                                aria-labelledby="fc-dom-76"
                                                                            >
                                                                                <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                                    <div className="fc-daygrid-day-top">
                                                                                        <a
                                                                                            id="fc-dom-76"
                                                                                            className="fc-daygrid-day-number"
                                                                                            aria-label="January 7, 2025"
                                                                                        >
                                                                                            7
                                                                                        </a>
                                                                                    </div>
                                                                                    <div className="fc-daygrid-day-events">
                                                                                        <div
                                                                                            className="fc-daygrid-day-bottom"
                                                                                            style={{ marginTop: 0 }}
                                                                                        />
                                                                                    </div>
                                                                                    <div className="fc-daygrid-day-bg" />
                                                                                </div>
                                                                            </td>
                                                                            <td
                                                                                role="gridcell"
                                                                                className="fc-daygrid-day fc-day fc-day-wed fc-day-future fc-day-other"
                                                                                data-date="2025-01-08"
                                                                                aria-labelledby="fc-dom-78"
                                                                            >
                                                                                <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                                    <div className="fc-daygrid-day-top">
                                                                                        <a
                                                                                            id="fc-dom-78"
                                                                                            className="fc-daygrid-day-number"
                                                                                            aria-label="January 8, 2025"
                                                                                        >
                                                                                            8
                                                                                        </a>
                                                                                    </div>
                                                                                    <div className="fc-daygrid-day-events">
                                                                                        <div
                                                                                            className="fc-daygrid-day-bottom"
                                                                                            style={{ marginTop: 0 }}
                                                                                        />
                                                                                    </div>
                                                                                    <div className="fc-daygrid-day-bg" />
                                                                                </div>
                                                                            </td>
                                                                            <td
                                                                                role="gridcell"
                                                                                className="fc-daygrid-day fc-day fc-day-thu fc-day-future fc-day-other"
                                                                                data-date="2025-01-09"
                                                                                aria-labelledby="fc-dom-80"
                                                                            >
                                                                                <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                                    <div className="fc-daygrid-day-top">
                                                                                        <a
                                                                                            id="fc-dom-80"
                                                                                            className="fc-daygrid-day-number"
                                                                                            aria-label="January 9, 2025"
                                                                                        >
                                                                                            9
                                                                                        </a>
                                                                                    </div>
                                                                                    <div className="fc-daygrid-day-events">
                                                                                        <div
                                                                                            className="fc-daygrid-day-bottom"
                                                                                            style={{ marginTop: 0 }}
                                                                                        />
                                                                                    </div>
                                                                                    <div className="fc-daygrid-day-bg" />
                                                                                </div>
                                                                            </td>
                                                                            <td
                                                                                role="gridcell"
                                                                                className="fc-daygrid-day fc-day fc-day-fri fc-day-future fc-day-other"
                                                                                data-date="2025-01-10"
                                                                                aria-labelledby="fc-dom-82"
                                                                            >
                                                                                <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                                    <div className="fc-daygrid-day-top">
                                                                                        <a
                                                                                            id="fc-dom-82"
                                                                                            className="fc-daygrid-day-number"
                                                                                            aria-label="January 10, 2025"
                                                                                        >
                                                                                            10
                                                                                        </a>
                                                                                    </div>
                                                                                    <div className="fc-daygrid-day-events">
                                                                                        <div
                                                                                            className="fc-daygrid-day-bottom"
                                                                                            style={{ marginTop: 0 }}
                                                                                        />
                                                                                    </div>
                                                                                    <div className="fc-daygrid-day-bg" />
                                                                                </div>
                                                                            </td>
                                                                            <td
                                                                                role="gridcell"
                                                                                className="fc-daygrid-day fc-day fc-day-sat fc-day-future fc-day-other"
                                                                                data-date="2025-01-11"
                                                                                aria-labelledby="fc-dom-84"
                                                                            >
                                                                                <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                                                    <div className="fc-daygrid-day-top">
                                                                                        <a
                                                                                            id="fc-dom-84"
                                                                                            className="fc-daygrid-day-number"
                                                                                            aria-label="January 11, 2025"
                                                                                        >
                                                                                            11
                                                                                        </a>
                                                                                    </div>
                                                                                    <div className="fc-daygrid-day-events">
                                                                                        <div
                                                                                            className="fc-daygrid-day-bottom"
                                                                                            style={{ marginTop: 0 }}
                                                                                        />
                                                                                    </div>
                                                                                    <div className="fc-daygrid-day-bg">
                                                                                        <div
                                                                                            className="fc-daygrid-bg-harness"
                                                                                            style={{ left: 0, right: 0 }}
                                                                                        >
                                                                                            <div className="fc-non-business" />
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*end col*/}
            </div>
            {/*end row*/}
        </div>

    </>)
}

export default ScheduleTiming