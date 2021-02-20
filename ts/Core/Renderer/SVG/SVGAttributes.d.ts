/* *
 *
 *  (c) 2010-2021 Torstein Honsi
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */

/* *
 *
 *  Imports
 *
 * */

import type ColorType from '../../Color/ColorType';
import type CSSObject from '../CSSObject';
import DashStyleValue from '../DashStyleValue';
import type SVGPath from './SVGPath';

/* *
 *
 *  Declarations
 *
 * */

export interface SVGAttributes {
    // [key: string]: any;
    align?: 'left'|'center'|'right';
    alphaCorrection?: number;
    anchorX?: number;
    anchorY?: number;
    class?: string;
    'clip-path'?: string;
    clockwise?: number;
    cursor?: string;
    cx?: number;
    cy?: number;
    d?: (string|SVGPath);
    dashstyle?: DashStyleValue;
    depth?: number;
    display?: ''|'block'|'none';
    dx?: number;
    dy?: number;
    end?: number;
    fill?: ColorType;
    'fill-opacity'?: number;
    gradientUnits?: 'userSpaceOnUse';
    height?: number;
    href?: string;
    id?: string;
    in?: string;
    innerR?: number;
    inverted?: boolean;
    longArc?: number;
    matrix?: Array<number>;
    offset?: number;
    opacity?: number;
    open?: boolean;
    padding?: number;
    paddingLeft?: number|'unset';
    paddingRight?: number|'unset';
    patternContentUnits?: 'userSpaceOnUse'|'objectBoundingBox';
    patternTransform?: string;
    patternUnits?: 'userSpaceOnUse';
    preserveAspectRatio?: string;
    r?: number;
    rx?: number;
    ry?: number;
    rotation?: number;
    rotationOriginX?: number;
    rotationOriginY?: number;
    scaleX?: number;
    scaleY?: number;
    slope?: number;
    start?: number;
    stdDeviation?: number;
    stroke?: ColorType;
    'stroke-linecap'?: 'butt'|'round'|'square';
    'stroke-linejoin'?: 'butt'|'round'|'square';
    'stroke-opacity'?: number;
    'stroke-width'?: number;
    strokeWidth?: number; // Used in PatternFill, transformed to stroke-width
    // @todo: Create special ButtonTheme class for exporting and RangeSelector
    // states?: any;
    'stop-color'?: string;
    'stop-opacity'?: number;
    style?: CSSObject|string;
    tableValues?: string;
    text?: string;
    'text-align'?: 'center'|'left'|'right';
    title?: string;
    transform?: string;
    translateX?: number;
    translateY?: number;
    type?: string;
    version?: string;
    viewBox?: string;
    visibility?: 'hidden'|'inherit'|'visible';
    width?: number;
    x?: number;
    x1?: number;
    x2?: number;
    y?: number;
    y1?: number;
    y2?: number;
    z?: number;
    zIndex?: number;
}

/* *
 *
 *  Export
 *
 * */

export default SVGAttributes;
