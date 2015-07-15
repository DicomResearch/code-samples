import Uri from './../../../library/Uri.js';
import {BaseStorage} from 'modules/common/storage/BaseStorage.js';
import {ResourceViewError} from './ResourceViewError.js';

/**
 * Инкапсулирует получение данных о ресурсе с бэкенда
 */
export class ResourceViewStorage extends BaseStorage {

    /**
     * Получить ссылку на ресурс с данными
     *
     * @returns {string}
     */
    getUrl() {
        let resourceId = Uri.getParameterByName('id');
        return '/resource/api/view?id=' + resourceId;
    }

    /**
     * Исполняем хендлер если успешно подтянули ресурс
     *
     * @param data
     */
    successHandler(data) {
        let resourceData = super.fetchParam(data, 'resource');
        PubSub.publish('resource.view.storage.getData', resourceData);
    }

    /**
     * Исполняем хендлер если сервер вернул ошибку
     */
    errorHandler() {
        throw ResourceViewError.cantGetDataFromServerError(url);
    }
}
