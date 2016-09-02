import Vue from 'vue';
import moment from 'moment';

//自定义过滤器
Vue.filter('headURLFilter', function (url) {
    if(url == null || url == ''){
        return '/src/assets/image-square.png';
    }else{
        return url;
    }
});

Vue.filter('dateFormatFilter', function (date) {
    if (date == null || date === undefined) {
        return '- -'
    } else {
        return moment(new Date(date)).format("YYYY-MM-DD");
    }
});
