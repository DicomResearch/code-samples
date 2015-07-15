import {BaseError} from 'modules/common/errors/BaseError.js';

/**
 * Class ResourceViewError
 */
export class ResourceViewError extends BaseError {
    /**
     * @param url
     */
    static cantGetDataFromServerError(url) {
        return new ResourceViewError("Failed to get resource from: " + url);
    }
}
