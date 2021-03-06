/*
 * Copyright (c) 2018 THL A29 Limited, a Tencent company. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
const models = require("./models");
const AbstractClient = require('../../common/abstract_client')
const PublishMessageRequest = models.PublishMessageRequest;
const DeleteProductRequest = models.DeleteProductRequest;
const DescribeTasksRequest = models.DescribeTasksRequest;
const DescribeMultiDevicesRequest = models.DescribeMultiDevicesRequest;
const MultiDevicesInfo = models.MultiDevicesInfo;
const UpdateDeviceShadowResponse = models.UpdateDeviceShadowResponse;
const DescribeTaskResponse = models.DescribeTaskResponse;
const CancelTaskRequest = models.CancelTaskRequest;
const CreateTaskResponse = models.CreateTaskResponse;
const BatchPublishMessage = models.BatchPublishMessage;
const BatchUpdateShadow = models.BatchUpdateShadow;
const DeleteDeviceRequest = models.DeleteDeviceRequest;
const DeleteProductResponse = models.DeleteProductResponse;
const DescribeMultiDevTaskResponse = models.DescribeMultiDevTaskResponse;
const DescribeDevicesResponse = models.DescribeDevicesResponse;
const DeviceTag = models.DeviceTag;
const ProductInfo = models.ProductInfo;
const DescribeTaskRequest = models.DescribeTaskRequest;
const Task = models.Task;
const PublishMessageResponse = models.PublishMessageResponse;
const ProductMetadata = models.ProductMetadata;
const DescribeTasksResponse = models.DescribeTasksResponse;
const CreateProductResponse = models.CreateProductResponse;
const Filter = models.Filter;
const DescribeDevicesRequest = models.DescribeDevicesRequest;
const CreateTaskRequest = models.CreateTaskRequest;
const DescribeMultiDevTaskRequest = models.DescribeMultiDevTaskRequest;
const DescribeProductsRequest = models.DescribeProductsRequest;
const CancelTaskResponse = models.CancelTaskResponse;
const CreateDeviceResponse = models.CreateDeviceResponse;
const CreateDeviceRequest = models.CreateDeviceRequest;
const DescribeProductsResponse = models.DescribeProductsResponse;
const UpdateDeviceShadowRequest = models.UpdateDeviceShadowRequest;
const CreateProductRequest = models.CreateProductRequest;
const Attribute = models.Attribute;
const DeleteDeviceResponse = models.DeleteDeviceResponse;
const DeviceInfo = models.DeviceInfo;
const CreateMultiDeviceResponse = models.CreateMultiDeviceResponse;
const DescribeDeviceShadowResponse = models.DescribeDeviceShadowResponse;
const ProductProperties = models.ProductProperties;
const CreateMultiDeviceRequest = models.CreateMultiDeviceRequest;
const DescribeMultiDevicesResponse = models.DescribeMultiDevicesResponse;
const DescribeDeviceShadowRequest = models.DescribeDeviceShadowRequest;
const TaskInfo = models.TaskInfo;


/**
 * iotcloud client
 * @class
 */
class IotcloudClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("iotcloud.tencentcloudapi.com", "2018-06-14", credential, region, profile);
    }
    
    /**
     * 本接口（CreateTask）用于创建一个批量任务。目前此接口可以创建批量更新影子以及批量下发消息的任务
     * @param {CreateTaskRequest} req
     * @param {function(string, CreateTaskResponse):void} cb
     * @public
     */
    CreateTask(req, cb) {
        let resp = new CreateTaskResponse();
        this.request("CreateTask", req, resp, cb);
    }

    /**
     * 本接口（DeleteProduct）用于删除一个物联网通信产品。
     * @param {DeleteProductRequest} req
     * @param {function(string, DeleteProductResponse):void} cb
     * @public
     */
    DeleteProduct(req, cb) {
        let resp = new DeleteProductResponse();
        this.request("DeleteProduct", req, resp, cb);
    }

    /**
     * 本接口（CreateProduct）用于创建一个新的物联网通信产品
     * @param {CreateProductRequest} req
     * @param {function(string, CreateProductResponse):void} cb
     * @public
     */
    CreateProduct(req, cb) {
        let resp = new CreateProductResponse();
        this.request("CreateProduct", req, resp, cb);
    }

    /**
     * 本接口（CreateDevice）用于新建一个物联网通信设备。
     * @param {CreateDeviceRequest} req
     * @param {function(string, CreateDeviceResponse):void} cb
     * @public
     */
    CreateDevice(req, cb) {
        let resp = new CreateDeviceResponse();
        this.request("CreateDevice", req, resp, cb);
    }

    /**
     * 本接口（PublishMessage）用于向某个主题发消息。
     * @param {PublishMessageRequest} req
     * @param {function(string, PublishMessageResponse):void} cb
     * @public
     */
    PublishMessage(req, cb) {
        let resp = new PublishMessageResponse();
        this.request("PublishMessage", req, resp, cb);
    }

    /**
     * 本接口（DescribeProducts）用于列出产品列表。
     * @param {DescribeProductsRequest} req
     * @param {function(string, DescribeProductsResponse):void} cb
     * @public
     */
    DescribeProducts(req, cb) {
        let resp = new DescribeProductsResponse();
        this.request("DescribeProducts", req, resp, cb);
    }

    /**
     * 本接口（CancelTask）用于取消一个未被调度的任务。
     * @param {CancelTaskRequest} req
     * @param {function(string, CancelTaskResponse):void} cb
     * @public
     */
    CancelTask(req, cb) {
        let resp = new CancelTaskResponse();
        this.request("CancelTask", req, resp, cb);
    }

    /**
     * 本接口（UpdateDeviceShadow）用于更新虚拟设备信息。
     * @param {UpdateDeviceShadowRequest} req
     * @param {function(string, UpdateDeviceShadowResponse):void} cb
     * @public
     */
    UpdateDeviceShadow(req, cb) {
        let resp = new UpdateDeviceShadowResponse();
        this.request("UpdateDeviceShadow", req, resp, cb);
    }

    /**
     * 本接口（DescribeMultiDevTask）用于查询批量创建设备任务的执行状态。
     * @param {DescribeMultiDevTaskRequest} req
     * @param {function(string, DescribeMultiDevTaskResponse):void} cb
     * @public
     */
    DescribeMultiDevTask(req, cb) {
        let resp = new DescribeMultiDevTaskResponse();
        this.request("DescribeMultiDevTask", req, resp, cb);
    }

    /**
     * 本接口（DescribeDeviceShadow）用于查询虚拟设备信息。
     * @param {DescribeDeviceShadowRequest} req
     * @param {function(string, DescribeDeviceShadowResponse):void} cb
     * @public
     */
    DescribeDeviceShadow(req, cb) {
        let resp = new DescribeDeviceShadowResponse();
        this.request("DescribeDeviceShadow", req, resp, cb);
    }

    /**
     * 本接口（CreateMultiDevice）用于批量创建物联云设备。
     * @param {CreateMultiDeviceRequest} req
     * @param {function(string, CreateMultiDeviceResponse):void} cb
     * @public
     */
    CreateMultiDevice(req, cb) {
        let resp = new CreateMultiDeviceResponse();
        this.request("CreateMultiDevice", req, resp, cb);
    }

    /**
     * 本接口（DescribeTasks）用于查询已创建的任务列表，任务保留一个月
     * @param {DescribeTasksRequest} req
     * @param {function(string, DescribeTasksResponse):void} cb
     * @public
     */
    DescribeTasks(req, cb) {
        let resp = new DescribeTasksResponse();
        this.request("DescribeTasks", req, resp, cb);
    }

    /**
     * 本接口（DeleteDevice）用于删除物联网通信设备。
     * @param {DeleteDeviceRequest} req
     * @param {function(string, DeleteDeviceResponse):void} cb
     * @public
     */
    DeleteDevice(req, cb) {
        let resp = new DeleteDeviceResponse();
        this.request("DeleteDevice", req, resp, cb);
    }

    /**
     * 本接口（DescribeTask）用于查询一个已创建任务的详情，任务保留一个月
     * @param {DescribeTaskRequest} req
     * @param {function(string, DescribeTaskResponse):void} cb
     * @public
     */
    DescribeTask(req, cb) {
        let resp = new DescribeTaskResponse();
        this.request("DescribeTask", req, resp, cb);
    }

    /**
     * 本接口（DescribeMultiDevices）用于查询批量创建设备的执行结果。
     * @param {DescribeMultiDevicesRequest} req
     * @param {function(string, DescribeMultiDevicesResponse):void} cb
     * @public
     */
    DescribeMultiDevices(req, cb) {
        let resp = new DescribeMultiDevicesResponse();
        this.request("DescribeMultiDevices", req, resp, cb);
    }

    /**
     * 本接口（DescribeDevices）用于查询物联网通信设备的设备列表。
     * @param {DescribeDevicesRequest} req
     * @param {function(string, DescribeDevicesResponse):void} cb
     * @public
     */
    DescribeDevices(req, cb) {
        let resp = new DescribeDevicesResponse();
        this.request("DescribeDevices", req, resp, cb);
    }


}
module.exports = IotcloudClient;
