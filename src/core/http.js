/**
 * Created by Syun on 2016/12/19.
 */
export default {
  httpGet(vm,url,successResponse,failResponse){
    "use strict";
      vm.$http.get(url).then(successResponse).catch(failResponse);
  },
  httpPost(vm,url,postData,successResponse,failResponse){
    "use strict";
    vm.$http.post(url,postData).then(successResponse).catch(failResponse);
  }
}
