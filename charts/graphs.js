
import * as d3 from "https://cdn.skypack.dev/d3@7";
import {colors} from "./colors.js"

const drawGauge = function(svg, data) {
    const r = 100;
    svg.attr("width", r * 2).attr("height", r);

    p = d3.arc()({
      startAngle: 0 - Math.PI / 2,
      endAngle: data.speed / data.maxSpeed * Math.PI - Math.PI / 2,
      innerRadius: r*0.7,
      outerRadius: r
    });

    svg.append('g')
        .attr('transform', `translate(${r},${r})`)
        .append('path')
        .attr('d', p)
        .attr('fill', colors.dark_blue);
}

const functionMap = {
    'gauge': drawGauge
}

export const init = function() {
    d3.selectAll('[data-graph]')
        .nodes()
        .forEach(function(node) {
            var div = document.createElement("div");
            node.parentNode.insertBefore(div, node.nextSibling);
            functionMap[node.dataset.graph](
                d3.select(div).append('svg'),
                JSON.parse(node.innerHTML)
            );

        });
}
