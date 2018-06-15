const AbstractModel = require("../../common/abstract_model");

/**
 * SendVcode返回参数结构体
 * @class
 */
class SendVcodeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求ID，每次请求都会返回。定位问题时需要提供该次请求的RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = params.RequestId || null;

    }
}

/**
 * DeleteAccount请求参数结构体
 * @class
 */
class DeleteAccountRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块名
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 操作名
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * 帐号ID列表
         * @type {Array.<string> || null}
         */
        this.AccountList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Module = params.Module || null;
        this.Operation = params.Operation || null;
        this.AccountList = params.AccountList || null;

    }
}

/**
 * CreateSeal请求参数结构体
 * @class
 */
class CreateSealRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块名
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 操作名
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * 帐号ID
         * @type {string || null}
         */
        this.AccountResId = null;

        /**
         * 签章链接
         * @type {string || null}
         */
        this.ImgUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Module = params.Module || null;
        this.Operation = params.Operation || null;
        this.AccountResId = params.AccountResId || null;
        this.ImgUrl = params.ImgUrl || null;

    }
}

/**
 * CreateSeal返回参数结构体
 * @class
 */
class CreateSealResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 签章ID
         * @type {string || null}
         */
        this.SealResId = null;

        /**
         * 唯一请求ID，每次请求都会返回。定位问题时需要提供该次请求的RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SealResId = params.SealResId || null;
        this.RequestId = params.RequestId || null;

    }
}

/**
 * DescribeTaskStatus返回参数结构体
 * @class
 */
class DescribeTaskStatusResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务结果
         * @type {string || null}
         */
        this.TaskResult = null;

        /**
         * 任务类型，010代表合同上传结果，020代表合同下载结果
         * @type {string || null}
         */
        this.TaskType = null;

        /**
         * 唯一请求ID，每次请求都会返回。定位问题时需要提供该次请求的RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskResult = params.TaskResult || null;
        this.TaskType = params.TaskType || null;
        this.RequestId = params.RequestId || null;

    }
}

/**
 * CheckVcode请求参数结构体
 * @class
 */
class CheckVcodeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块名
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 操作名
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * 帐号ID
         * @type {string || null}
         */
        this.AccountResId = null;

        /**
         * 合同ID
         * @type {string || null}
         */
        this.ContractResId = null;

        /**
         * 验证码
         * @type {string || null}
         */
        this.VerifyCode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Module = params.Module || null;
        this.Operation = params.Operation || null;
        this.AccountResId = params.AccountResId || null;
        this.ContractResId = params.ContractResId || null;
        this.VerifyCode = params.VerifyCode || null;

    }
}

/**
 * CheckVcode返回参数结构体
 * @class
 */
class CheckVcodeResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求ID，每次请求都会返回。定位问题时需要提供该次请求的RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = params.RequestId || null;

    }
}

/**
 * DownloadContract返回参数结构体
 * @class
 */
class DownloadContractResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID
         * @type {number || null}
         */
        this.TaskId = null;

        /**
         * 唯一请求ID，每次请求都会返回。定位问题时需要提供该次请求的RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = params.TaskId || null;
        this.RequestId = params.RequestId || null;

    }
}

/**
 * 签署坐标对象
 * @class
 */
class SignLocation extends  AbstractModel {
    constructor(){
        super();

        /**
         * 签名域页数
         * @type {string || null}
         */
        this.SignOnPage = null;

        /**
         * 签名域左下角X轴坐标轴
         * @type {string || null}
         */
        this.SignLocationLBX = null;

        /**
         * 签名域左下角Y轴坐标轴
         * @type {string || null}
         */
        this.SignLocationLBY = null;

        /**
         * 签名域右上角X轴坐标轴
         * @type {string || null}
         */
        this.SignLocationRUX = null;

        /**
         * 签名域右上角Y轴坐标轴
         * @type {string || null}
         */
        this.SignLocationRUY = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SignOnPage = params.SignOnPage || null;
        this.SignLocationLBX = params.SignLocationLBX || null;
        this.SignLocationLBY = params.SignLocationLBY || null;
        this.SignLocationRUX = params.SignLocationRUX || null;
        this.SignLocationRUY = params.SignLocationRUY || null;

    }
}

/**
 * 签署人信息
 * @class
 */
class SignInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 账户ID
         * @type {string || null}
         */
        this.AccountResId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AccountResId = params.AccountResId || null;

    }
}

/**
 * DeleteSeal请求参数结构体
 * @class
 */
class DeleteSealRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块名
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 操作名
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * 帐号ID
         * @type {string || null}
         */
        this.AccountResId = null;

        /**
         * 签章ID
         * @type {string || null}
         */
        this.SealResId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Module = params.Module || null;
        this.Operation = params.Operation || null;
        this.AccountResId = params.AccountResId || null;
        this.SealResId = params.SealResId || null;

    }
}

/**
 * DownloadContract请求参数结构体
 * @class
 */
class DownloadContractRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块名
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 操作名
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * 合同ID
         * @type {string || null}
         */
        this.ContractResId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Module = params.Module || null;
        this.Operation = params.Operation || null;
        this.ContractResId = params.ContractResId || null;

    }
}

/**
 * CreateEnterpriseAccount返回参数结构体
 * @class
 */
class CreateEnterpriseAccountResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 帐号ID
         * @type {string || null}
         */
        this.AccountResId = null;

        /**
         * 唯一请求ID，每次请求都会返回。定位问题时需要提供该次请求的RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AccountResId = params.AccountResId || null;
        this.RequestId = params.RequestId || null;

    }
}

/**
 * CreatePersonalAccount返回参数结构体
 * @class
 */
class CreatePersonalAccountResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 账号ID
         * @type {string || null}
         */
        this.AccountResId = null;

        /**
         * 唯一请求ID，每次请求都会返回。定位问题时需要提供该次请求的RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AccountResId = params.AccountResId || null;
        this.RequestId = params.RequestId || null;

    }
}

/**
 * CreateEnterpriseAccount请求参数结构体
 * @class
 */
class CreateEnterpriseAccountRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块名
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 操作名
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * 企业用户名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 企业用户证件类型，8代表营业执照
         * @type {number || null}
         */
        this.IdentType = null;

        /**
         * 企业用户营业执照号码
         * @type {string || null}
         */
        this.IdentNo = null;

        /**
         * 企业联系电话
         * @type {string || null}
         */
        this.MobilePhone = null;

        /**
         * 经办人姓名
         * @type {string || null}
         */
        this.TransactorName = null;

        /**
         * 经办人证件类型，0代表身份证
         * @type {number || null}
         */
        this.TransactorIdentType = null;

        /**
         * 经办人证件号码
         * @type {string || null}
         */
        this.TransactorIdentNo = null;

        /**
         * 经办人手机号
         * @type {string || null}
         */
        this.TransactorPhone = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Module = params.Module || null;
        this.Operation = params.Operation || null;
        this.Name = params.Name || null;
        this.IdentType = params.IdentType || null;
        this.IdentNo = params.IdentNo || null;
        this.MobilePhone = params.MobilePhone || null;
        this.TransactorName = params.TransactorName || null;
        this.TransactorIdentType = params.TransactorIdentType || null;
        this.TransactorIdentNo = params.TransactorIdentNo || null;
        this.TransactorPhone = params.TransactorPhone || null;

    }
}

/**
 * CreateContractByUpload请求参数结构体
 * @class
 */
class CreateContractByUploadRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块名
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 操作名
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * 签署人信息
         * @type {Array.<SignInfo> || null}
         */
        this.SignInfos = null;

        /**
         * 合同上传链接地址
         * @type {string || null}
         */
        this.ContractFile = null;

        /**
         * 合同名称
         * @type {string || null}
         */
        this.ContractName = null;

        /**
         * 备注
         * @type {string || null}
         */
        this.Remarks = null;

        /**
         * 合同发起方帐号ID
         * @type {string || null}
         */
        this.Initiator = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Module = params.Module || null;
        this.Operation = params.Operation || null;

        if (params.SignInfos) {
            this.SignInfos = new Array();
            for (let z in params.SignInfos) {
                let obj = new SignInfo();
                obj.deserialize(params.SignInfos[z]);
                this.SignInfos.push(obj);
            }
        }
        this.ContractFile = params.ContractFile || null;
        this.ContractName = params.ContractName || null;
        this.Remarks = params.Remarks || null;
        this.Initiator = params.Initiator || null;

    }
}

/**
 * CreateContractByUpload返回参数结构体
 * @class
 */
class CreateContractByUploadResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 任务ID
         * @type {number || null}
         */
        this.TaskId = null;

        /**
         * 唯一请求ID，每次请求都会返回。定位问题时需要提供该次请求的RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = params.TaskId || null;
        this.RequestId = params.RequestId || null;

    }
}

/**
 * DeleteSeal返回参数结构体
 * @class
 */
class DeleteSealResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 签章ID
         * @type {string || null}
         */
        this.SealResId = null;

        /**
         * 唯一请求ID，每次请求都会返回。定位问题时需要提供该次请求的RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SealResId = params.SealResId || null;
        this.RequestId = params.RequestId || null;

    }
}

/**
 * CreatePersonalAccount请求参数结构体
 * @class
 */
class CreatePersonalAccountRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块名
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 操作名
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * 个人用户姓名
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 个人用户证件类型。0代表身份证
         * @type {number || null}
         */
        this.IdentType = null;

        /**
         * 个人用户证件号码
         * @type {string || null}
         */
        this.IdentNo = null;

        /**
         * 个人用户手机号
         * @type {string || null}
         */
        this.MobilePhone = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Module = params.Module || null;
        this.Operation = params.Operation || null;
        this.Name = params.Name || null;
        this.IdentType = params.IdentType || null;
        this.IdentNo = params.IdentNo || null;
        this.MobilePhone = params.MobilePhone || null;

    }
}

/**
 * DescribeTaskStatus请求参数结构体
 * @class
 */
class DescribeTaskStatusRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块名
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 操作名
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * 任务ID
         * @type {number || null}
         */
        this.TaskId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Module = params.Module || null;
        this.Operation = params.Operation || null;
        this.TaskId = params.TaskId || null;

    }
}

/**
 * SendVcode请求参数结构体
 * @class
 */
class SendVcodeRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块名
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 操作名
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * 合同ID
         * @type {string || null}
         */
        this.ContractResId = null;

        /**
         * 帐号ID
         * @type {string || null}
         */
        this.AccountResId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Module = params.Module || null;
        this.Operation = params.Operation || null;
        this.ContractResId = params.ContractResId || null;
        this.AccountResId = params.AccountResId || null;

    }
}

/**
 * SignContractByCoordinate请求参数结构体
 * @class
 */
class SignContractByCoordinateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 模块名
         * @type {string || null}
         */
        this.Module = null;

        /**
         * 操作名
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * 合同ID
         * @type {string || null}
         */
        this.ContractResId = null;

        /**
         * 帐户ID
         * @type {string || null}
         */
        this.AccountResId = null;

        /**
         * 授权时间，格式20160801095509
         * @type {string || null}
         */
        this.AuthorizationTime = null;

        /**
         * 授权IP地址
         * @type {string || null}
         */
        this.Position = null;

        /**
         * 签署坐标，坐标不得超过合同文件边界
         * @type {Array.<SignLocation> || null}
         */
        this.SignLocations = null;

        /**
         * 印章ID
         * @type {string || null}
         */
        this.SealResId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Module = params.Module || null;
        this.Operation = params.Operation || null;
        this.ContractResId = params.ContractResId || null;
        this.AccountResId = params.AccountResId || null;
        this.AuthorizationTime = params.AuthorizationTime || null;
        this.Position = params.Position || null;

        if (params.SignLocations) {
            this.SignLocations = new Array();
            for (let z in params.SignLocations) {
                let obj = new SignLocation();
                obj.deserialize(params.SignLocations[z]);
                this.SignLocations.push(obj);
            }
        }
        this.SealResId = params.SealResId || null;

    }
}

/**
 * SignContractByCoordinate返回参数结构体
 * @class
 */
class SignContractByCoordinateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 唯一请求ID，每次请求都会返回。定位问题时需要提供该次请求的RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RequestId = params.RequestId || null;

    }
}

/**
 * DeleteAccount返回参数结构体
 * @class
 */
class DeleteAccountResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 删除成功帐号ID列表
         * @type {Array.<string> || null}
         */
        this.DelSuccessList = null;

        /**
         * 删除失败帐号ID列表
         * @type {Array.<string> || null}
         */
        this.DelFailedList = null;

        /**
         * 唯一请求ID，每次请求都会返回。定位问题时需要提供该次请求的RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DelSuccessList = params.DelSuccessList || null;
        this.DelFailedList = params.DelFailedList || null;
        this.RequestId = params.RequestId || null;

    }
}

module.exports = {
    SendVcodeResponse: SendVcodeResponse,
    DeleteAccountRequest: DeleteAccountRequest,
    CreateSealRequest: CreateSealRequest,
    CreateSealResponse: CreateSealResponse,
    DescribeTaskStatusResponse: DescribeTaskStatusResponse,
    CheckVcodeRequest: CheckVcodeRequest,
    CheckVcodeResponse: CheckVcodeResponse,
    DownloadContractResponse: DownloadContractResponse,
    SignLocation: SignLocation,
    SignInfo: SignInfo,
    DeleteSealRequest: DeleteSealRequest,
    DownloadContractRequest: DownloadContractRequest,
    CreateEnterpriseAccountResponse: CreateEnterpriseAccountResponse,
    CreatePersonalAccountResponse: CreatePersonalAccountResponse,
    CreateEnterpriseAccountRequest: CreateEnterpriseAccountRequest,
    CreateContractByUploadRequest: CreateContractByUploadRequest,
    CreateContractByUploadResponse: CreateContractByUploadResponse,
    DeleteSealResponse: DeleteSealResponse,
    CreatePersonalAccountRequest: CreatePersonalAccountRequest,
    DescribeTaskStatusRequest: DescribeTaskStatusRequest,
    SendVcodeRequest: SendVcodeRequest,
    SignContractByCoordinateRequest: SignContractByCoordinateRequest,
    SignContractByCoordinateResponse: SignContractByCoordinateResponse,
    DeleteAccountResponse: DeleteAccountResponse,

}