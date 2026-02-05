import {DateTime} from 'luxon';

const util = {
    months: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
    weekdays: ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
    firstWeekday: (m) => DateTime.now().set({month:m}).startOf('month').weekday,
    daysInMonth: (m) => DateTime.now().set({month:m}).endOf('month').day,
    baseDaysArray: (m) => {
        let arr = [];
        for (let i=1; i <= util.daysInMonth(m); i++) {
            arr.push(i);
        }
        return arr;
    },
    monthDaysArray: (m) => {
        let arr = [];
        for (let w=0; w < util.firstWeekday(m); w++) {
            arr.push('*');
        }
        for (let i=1; i <= util.daysInMonth(m); i++) {
            arr.push(i);
        }
        return arr;
    },
    marksArray: (numPoints, radius) => {
        let arr = [];
        let angle = 360 / numPoints;
        for (let i=0; i < numPoints; i++) {
            let rad = (i * angle - 90) * Math.PI / 180;
            let x = radius * Math.cos(rad);
            let y = radius * Math.sin(rad);
            let val = i;
            arr.push({x, y, val});
        }
        return arr;
    },
    yearsArray: (startyear, numyears) => {
        let arr = [];
        for (let i=0; i < numyears; i++) {
            arr.push(i + startyear);
        }
        return arr;
    },
    marksValueArray: (arrPoints, radius, currentVal, smallFontSize, bigFontSize, valueColor, hiliteColor) => {
        let arr = [];
        let step_angle = 360 / arrPoints.length;
        arrPoints.forEach((m,i) => {
            let angle = (i * step_angle) - 90;
            let rad = angle * Math.PI / 180;
            let x = radius * Math.cos(rad);
            let y = radius * Math.sin(rad);
            let fontsize = currentVal == m ? bigFontSize : smallFontSize;
            let fontwt = currentVal == m ? '600' : '400';
            let color = currentVal == m ? hiliteColor : valueColor;
            let val = m;
            arr.push({x, y, val, fontsize, fontwt, color, i});
        })
        return arr;
    }
}

export default util;