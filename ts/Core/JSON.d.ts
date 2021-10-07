/* *
 *
 *  (c) 2020-2021 Highsoft AS
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 *  Authors:
 *  - Sophie Bremer
 *
 * */

/* *
 *
 *  Declarations
 *
 * */

export namespace JSON {

    /**
     * Type structor of arrays as it is supported in JSON.
     */
    export interface Array<T extends (Primitive|Type)=(Primitive|Type)> extends globalThis.Array<T> {
        [index: number]: T;
    }

    /**
     * Type structure of a record object as it is supported in JSON.
     */
    export interface Object<T extends (Primitive|Type)=(Primitive|Type)> {
        [key: string]: T;
    }

    /**
     * All primitive types, that are supported in JSON.
     */
    export type Primitive = (boolean|number|string|null|undefined);

    /**
     * All object types, that are supported in JSON.
     */
    // eslint-disable-next-line @typescript-eslint/ban-types
    export type Type = (Array|Object|Primitive);

}

export type JSON = (JSON.Array|JSON.Object);

/* *
 *
 *  Default Export
 *
 * */

export default JSON;
