/*
 * This file is part of the nivo project.
 *
 * Copyright 2016-present, Raphaël Benitte.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import PropTypes from 'prop-types'
import { lineCurvePropType } from '@nivo/core'
import { scalePropType } from '@nivo/scales'
import { LegendPropShape } from '@nivo/legends'

export const LinePropTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            data: PropTypes.arrayOf(
                PropTypes.shape({
                    x: PropTypes.oneOfType([
                        PropTypes.number,
                        PropTypes.string,
                        PropTypes.instanceOf(Date),
                    ]),
                    y: PropTypes.oneOfType([
                        PropTypes.number,
                        PropTypes.string,
                        PropTypes.instanceOf(Date),
                    ]),
                })
            ).isRequired,
        })
    ).isRequired,

    xScale: scalePropType.isRequired,
    yScale: scalePropType.isRequired,

    computedData: PropTypes.object.isRequired,

    curve: lineCurvePropType.isRequired,
    areaGenerator: PropTypes.func.isRequired,
    lineGenerator: PropTypes.func.isRequired,

    // axes & grid
    axisTop: PropTypes.object,
    axisRight: PropTypes.object,
    axisBottom: PropTypes.object,
    axisLeft: PropTypes.object,
    enableGridX: PropTypes.bool.isRequired,
    enableGridY: PropTypes.bool.isRequired,
    gridXValues: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
    gridYValues: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),

    // dots
    enableDots: PropTypes.bool.isRequired,
    dotSymbol: PropTypes.func,
    dotSize: PropTypes.number.isRequired,
    dotColor: PropTypes.any.isRequired,
    dotBorderWidth: PropTypes.number.isRequired,
    dotBorderColor: PropTypes.any.isRequired,
    enableDotLabel: PropTypes.bool.isRequired,

    // markers
    markers: PropTypes.arrayOf(
        PropTypes.shape({
            axis: PropTypes.oneOf(['x', 'y']).isRequired,
            value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
            style: PropTypes.object,
        })
    ),

    // styling
    getColor: PropTypes.func.isRequired,
    enableArea: PropTypes.bool.isRequired,
    areaOpacity: PropTypes.number.isRequired,
    areaBaselineValue: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
        PropTypes.instanceOf(Date),
    ]).isRequired,
    lineWidth: PropTypes.number.isRequired,
    defs: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        })
    ).isRequired,

    // interactivity
    isInteractive: PropTypes.bool.isRequired,
    enableStackTooltip: PropTypes.bool.isRequired,
    tooltip: PropTypes.func,
    tooltipFormat: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),

    legends: PropTypes.arrayOf(PropTypes.shape(LegendPropShape)).isRequired,
}

export const LineDefaultProps = {
    stacked: false,
    curve: 'linear',

    xScale: {
        type: 'point',
    },
    yScale: {
        type: 'linear',
        min: 0,
        max: 'auto',
    },

    // axes & grid
    axisBottom: {},
    axisLeft: {},
    enableGridX: true,
    enableGridY: true,

    // dots
    enableDots: true,
    dotSize: 6,
    dotColor: 'inherit',
    dotBorderWidth: 0,
    dotBorderColor: 'inherit',
    enableDotLabel: false,

    // styling
    colors: 'nivo',
    colorBy: 'id',
    enableArea: false,
    areaBaselineValue: 0,
    areaOpacity: 0.2,
    lineWidth: 2,
    defs: [],

    // interactivity
    isInteractive: true,
    enableStackTooltip: true,

    legends: [],
}
