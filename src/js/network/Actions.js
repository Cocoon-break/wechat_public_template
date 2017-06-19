/**
 * Created by wushengping on 2017/6/12.
 */
import * as Api from './Api'
import * as ApiUrls from './ApiUrls'

const Actions = {
    test(){
        return Api.GET(ApiUrls.URL_TEST)
    }
}

export default Actions