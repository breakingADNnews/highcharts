/* eslint comma-dangle: 0, max-len: 0 */
import type ColorString from './ColorString';
/**
 * Palette for Highcharts. Palette colors are defined in highcharts.css.
 * **Do not edit this file!** This file is generated using the 'gulp palette' task.
 */
export const enum Palette {
    /**
     * Chart background, point stroke for markers and columns etc
     */
    backgroundColor = '#ffffff',
    /**
     * Strong text.
     */
    neutralColor100 = '#000000',
    /**
     * Main text and some strokes.
     */
    neutralColor80 = '#333333',
    /**
     * Axis labels, axis title, connector fallback.
     */
    neutralColor60 = '#666666',
    /**
     * Credits text, export menu stroke.
     */
    neutralColor40 = '#999999',
    /**
     * Disabled texts, button strokes, crosshair etc.
     */
    neutralColor20 = '#cccccc',
    /**
     * Grid lines etc.
     */
    neutralColor10 = '#e6e6e6',
    /**
     * Minor grid lines etc.
     */
    neutralColor5 = '#f2f2f2',
    /**
     * Tooltip backgroud, button fills, map null points.
     */
    neutralColor3 = '#f7f7f7',
    /**
     * Drilldown clickable labels, color axis max color.
     */
    highlightColor100 = '#003399',
    /**
     * Selection marker, menu hover, button hover, chart border, navigator series.
     */
    highlightColor80 = '#335cad',
    /**
     * Navigator mask fill.
     */
    highlightColor60 = '#6685c2',
    /**
     * Ticks and axis line.
     */
    highlightColor20 = '#ccd6eb',
    /**
     * Pressed button, color axis min color.
     */
    highlightColor10 = '#e6ebf5',
    /**
     * Indicators
     */
    positiveColor = '#06b535',
    /**
     * Indicators
     */
    negativeColor = '#f21313',
}
/**
 * Series palettes for Highcharts. Series colors are defined in highcharts.css.
 * **Do not edit this file!** This file is generated using the 'gulp palette' task.
 */
const SeriesPalettes = {
    /**
     * Colors for data series and points
     */
    colors: [
        '#4caffe',
        '#544fc5',
        '#00e272',
        '#fe6a35',
        '#6b8abc',
        '#d568fb',
        '#2ee0ca',
        '#fa4b42',
        '#feb56a',
        '#91e8e1'
    ] as Array<ColorString>,
};
export default SeriesPalettes;
