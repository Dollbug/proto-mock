export const demo = {
    "nested": {
        "openplatform_chameleon_proto": {
            "options": {
                "go_package": "whgo/openplatform/proto/openplatform_chameleon;openplatform_chameleon_proto"
            },
            "nested": {
                "MiddleWareService": {
                    "methods": {
                        "Create": {
                            "requestType": "CreateMiddleWareReq",
                            "responseType": "Empty"
                        },
                        "GetMiddleWareList": {
                            "requestType": "QueryMiddleWareReq",
                            "responseType": "MiddleWareList"
                        },
                        "Delete": {
                            "requestType": "MiddleWare",
                            "responseType": "Empty"
                        },
                        "UploadMiddleWarePkg": {
                            "requestType": "MiddleWarePackage",
                            "responseType": "Empty"
                        },
                        "GetMiddleWareVersionList": {
                            "requestType": "QueryMiddleWareReq",
                            "responseType": "MiddleWareVersionList"
                        },
                        "UpdateMiddleWarePkg": {
                            "requestType": "MiddleWarePackage",
                            "responseType": "MiddleWarePackage"
                        },
                        "DeleteVersionPackage": {
                            "requestType": "MiddleWarePackage",
                            "responseType": "Empty"
                        },
                        "GetTypeList": {
                            "requestType": "Empty",
                            "responseType": "TypeList"
                        }
                    }
                },
                "QueryMiddleWareReq": {
                    "fields": {
                        "offset": {
                            "type": "int32",
                            "id": 1
                        },
                        "limit": {
                            "type": "int32",
                            "id": 2
                        },
                        "name": {
                            "type": "string",
                            "id": 3
                        },
                        "user_name": {
                            "type": "string",
                            "id": 4
                        },
                        "parent_id": {
                            "type": "int32",
                            "id": 5
                        },
                        "id": {
                            "type": "int64",
                            "id": 6
                        }
                    }
                },
                "MiddleWareList": {
                    "fields": {
                        "list": {
                            "rule": "repeated",
                            "type": "MiddleWare",
                            "id": 1
                        },
                        "total": {
                            "type": "int32",
                            "id": 2
                        }
                    }
                },
                "MiddleWare": {
                    "fields": {
                        "name": {
                            "type": "string",
                            "id": 1
                        },
                        "user_name": {
                            "type": "string",
                            "id": 2
                        },
                        "user_id": {
                            "type": "string",
                            "id": 3
                        },
                        "update_time": {
                            "type": "int64",
                            "id": 4
                        },
                        "id": {
                            "type": "int32",
                            "id": 5
                        }
                    }
                },
                "CreateMiddleWareReq": {
                    "fields": {
                        "entity": {
                            "type": "MiddleWare",
                            "id": 1
                        }
                    }
                },
                "MiddleWareVersionList": {
                    "fields": {
                        "list": {
                            "rule": "repeated",
                            "type": "MiddleWarePackage",
                            "id": 1
                        },
                        "total": {
                            "type": "int32",
                            "id": 2
                        },
                        "name": {
                            "type": "string",
                            "id": 3
                        }
                    }
                },
                "MiddleWarePackage": {
                    "fields": {
                        "name": {
                            "type": "string",
                            "id": 1
                        },
                        "version": {
                            "type": "string",
                            "id": 2
                        },
                        "meta": {
                            "rule": "repeated",
                            "type": "string",
                            "id": 3
                        },
                        "package": {
                            "type": "string",
                            "id": 4
                        },
                        "type": {
                            "type": "string",
                            "id": 5
                        },
                        "marks": {
                            "type": "string",
                            "id": 6
                        },
                        "id": {
                            "type": "int64",
                            "id": 7
                        },
                        "user_name": {
                            "type": "string",
                            "id": 8
                        },
                        "user_id": {
                            "type": "string",
                            "id": 9
                        },
                        "create_time": {
                            "type": "int64",
                            "id": 10
                        },
                        "update_time": {
                            "type": "int64",
                            "id": 11
                        },
                        "parentId": {
                            "type": "int32",
                            "id": 12
                        },
                        "deployment_type": {
                            "type": "string",
                            "id": 13
                        }
                    }
                },
                "TypeList": {
                    "fields": {
                        "list": {
                            "rule": "repeated",
                            "type": "string",
                            "id": 1
                        }
                    }
                },
                "MicroSrvService": {
                    "methods": {
                        "Create": {
                            "requestType": "MicroService",
                            "responseType": "Empty"
                        },
                        "GetMicroSrvList": {
                            "requestType": "QueryMicroSrvReq",
                            "responseType": "MicroServiceList"
                        },
                        "Update": {
                            "requestType": "MicroService",
                            "responseType": "MicroService"
                        },
                        "Delete": {
                            "requestType": "MicroService",
                            "responseType": "Empty"
                        },
                        "GetImageList": {
                            "requestType": "GetImageReq",
                            "responseType": "ImageList"
                        }
                    }
                },
                "GetImageReq": {
                    "fields": {
                        "srv_name": {
                            "type": "string",
                            "id": 1
                        }
                    }
                },
                "ImageList": {
                    "fields": {
                        "list": {
                            "rule": "repeated",
                            "type": "string",
                            "id": 1
                        }
                    }
                },
                "QueryMicroSrvReq": {
                    "fields": {
                        "offset": {
                            "type": "int32",
                            "id": 1
                        },
                        "limit": {
                            "type": "int32",
                            "id": 2
                        },
                        "name": {
                            "type": "string",
                            "id": 3
                        },
                        "user_name": {
                            "type": "string",
                            "id": 4
                        },
                        "id": {
                            "type": "int64",
                            "id": 5
                        }
                    }
                },
                "MicroService": {
                    "fields": {
                        "name": {
                            "type": "string",
                            "id": 1
                        },
                        "image": {
                            "type": "string",
                            "id": 2
                        },
                        "pub": {
                            "keyType": "string",
                            "type": "string",
                            "id": 8
                        },
                        "meta": {
                            "keyType": "string",
                            "type": "string",
                            "id": 3
                        },
                        "id": {
                            "type": "int64",
                            "id": 4
                        },
                        "user_name": {
                            "type": "string",
                            "id": 5
                        },
                        "user_id": {
                            "type": "string",
                            "id": 6
                        },
                        "update_time": {
                            "type": "int64",
                            "id": 7
                        },
                        "version": {
                            "type": "string",
                            "id": 9
                        },
                        "ports": {
                            "rule": "repeated",
                            "type": "Port",
                            "id": 10
                        },
                        "volumes": {
                            "rule": "repeated",
                            "type": "Volume",
                            "id": 11
                        }
                    }
                },
                "Port": {
                    "fields": {
                        "name": {
                            "type": "string",
                            "id": 1
                        },
                        "container_port": {
                            "type": "int32",
                            "id": 2
                        },
                        "protocol": {
                            "type": "ProtocolType",
                            "id": 3
                        },
                        "kind": {
                            "type": "KindType",
                            "id": 4
                        },
                        "source_port": {
                            "type": "int32",
                            "id": 5
                        }
                    },
                    "nested": {
                        "ProtocolType": {
                            "values": {
                                "Unknown": 0,
                                "TCP": 1,
                                "UDP": 2
                            }
                        },
                        "KindType": {
                            "values": {
                                "UnknownKind": 0,
                                "NodePort": 1,
                                "HostPort": 2,
                                "ClusterIP": 3,
                                "LoadBalancer": 4
                            }
                        }
                    }
                },
                "VolumeMount": {
                    "fields": {
                        "mount_path": {
                            "type": "string",
                            "id": 1
                        },
                        "read_only": {
                            "type": "bool",
                            "id": 2
                        },
                        "sub_path": {
                            "type": "string",
                            "id": 3
                        }
                    }
                },
                "Volume": {
                    "fields": {
                        "name": {
                            "type": "string",
                            "id": 1
                        },
                        "configMap": {
                            "type": "ConfigMap",
                            "id": 2
                        },
                        "volume_mount": {
                            "rule": "repeated",
                            "type": "VolumeMount",
                            "id": 3
                        }
                    },
                    "nested": {
                        "ConfigMap": {
                            "fields": {
                                "name": {
                                    "type": "string",
                                    "id": 1
                                },
                                "default_mode": {
                                    "type": "string",
                                    "id": 2
                                },
                                "optional": {
                                    "type": "bool",
                                    "id": 3
                                },
                                "items": {
                                    "rule": "repeated",
                                    "type": "Item",
                                    "id": 4
                                }
                            },
                            "nested": {
                                "Item": {
                                    "fields": {
                                        "key": {
                                            "type": "string",
                                            "id": 1
                                        },
                                        "path": {
                                            "type": "string",
                                            "id": 2
                                        },
                                        "mode": {
                                            "type": "string",
                                            "id": 3
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                "MicroServiceList": {
                    "fields": {
                        "list": {
                            "rule": "repeated",
                            "type": "MicroService",
                            "id": 1
                        },
                        "total": {
                            "type": "int32",
                            "id": 2
                        }
                    }
                },
                "CertService": {
                    "methods": {
                        "Create": {
                            "requestType": "Cert",
                            "responseType": "Empty"
                        },
                        "GetCertList": {
                            "requestType": "QueryCertReq",
                            "responseType": "CertList"
                        },
                        "Update": {
                            "requestType": "Cert",
                            "responseType": "Cert"
                        },
                        "Delete": {
                            "requestType": "Cert",
                            "responseType": "Empty"
                        }
                    }
                },
                "QueryCertReq": {
                    "fields": {
                        "offset": {
                            "type": "int32",
                            "id": 1
                        },
                        "limit": {
                            "type": "int32",
                            "id": 2
                        },
                        "name": {
                            "type": "string",
                            "id": 3
                        },
                        "user_name": {
                            "type": "string",
                            "id": 4
                        },
                        "id": {
                            "type": "int64",
                            "id": 5
                        }
                    }
                },
                "CertList": {
                    "fields": {
                        "list": {
                            "rule": "repeated",
                            "type": "Cert",
                            "id": 1
                        },
                        "total": {
                            "type": "int32",
                            "id": 2
                        }
                    }
                },
                "Cert": {
                    "fields": {
                        "name": {
                            "type": "string",
                            "id": 1
                        },
                        "signer": {
                            "type": "string",
                            "id": 2
                        },
                        "expire_date": {
                            "type": "int64",
                            "id": 3
                        },
                        "user_name": {
                            "type": "string",
                            "id": 4
                        },
                        "user_id": {
                            "type": "string",
                            "id": 5
                        },
                        "id": {
                            "type": "int64",
                            "id": 6
                        },
                        "IP": {
                            "rule": "repeated",
                            "type": "string",
                            "id": 7
                        },
                        "host": {
                            "rule": "repeated",
                            "type": "string",
                            "id": 8
                        },
                        "private_key": {
                            "type": "string",
                            "id": 9
                        },
                        "content": {
                            "type": "string",
                            "id": 10
                        },
                        "update_time": {
                            "type": "int64",
                            "id": 11
                        }
                    }
                },
                "PackTaskService": {
                    "methods": {
                        "Create": {
                            "requestType": "CreatePackTaskReq",
                            "responseType": "Empty"
                        },
                        "GetTaskList": {
                            "requestType": "QueryPackTaskList",
                            "responseType": "PackTaskList"
                        },
                        "GetTaskDetail": {
                            "requestType": "TaskDetailReq",
                            "responseType": "PackTask"
                        },
                        "Update": {
                            "requestType": "CreatePackTaskReq",
                            "responseType": "Empty"
                        },
                        "Delete": {
                            "requestType": "DeleteTaskReq",
                            "responseType": "Empty"
                        },
                        "Build": {
                            "requestType": "BuildTaskReq",
                            "responseType": "Empty"
                        },
                        "Stop": {
                            "requestType": "BuildTaskReq",
                            "responseType": "Empty"
                        },
                        "Clone": {
                            "requestType": "CloneTaskReq",
                            "responseType": "Empty"
                        },
                        "CreateTaskMicroSrv": {
                            "requestType": "TaskMicroSrv",
                            "responseType": "TaskMicroSrv"
                        },
                        "UpdateTaskMicroSrv": {
                            "requestType": "TaskMicroSrv",
                            "responseType": "Empty"
                        },
                        "DeleteTaskMicroSrv": {
                            "requestType": "TaskMicroSrv",
                            "responseType": "Empty"
                        },
                        "GetTaskMicroSrv": {
                            "requestType": "QueryRequest",
                            "responseType": "TaskMicroSrvList"
                        },
                        "GetPublicVarName": {
                            "requestType": "QueryRequest",
                            "responseType": "GetPublicVarNameResponse"
                        },
                        "CreateTaskSlb": {
                            "requestType": "TaskSlb",
                            "responseType": "TaskSlb"
                        },
                        "UpdateTaskSlb": {
                            "requestType": "TaskSlb",
                            "responseType": "Empty"
                        },
                        "DeleteTaskSlb": {
                            "requestType": "TaskSlb",
                            "responseType": "Empty"
                        },
                        "GetTaskSlb": {
                            "requestType": "QueryRequest",
                            "responseType": "TaskSlbList"
                        },
                        "CreateTaskMiddleware": {
                            "requestType": "TaskMiddleWare",
                            "responseType": "TaskMiddleWare"
                        },
                        "UpdateTaskMiddleware": {
                            "requestType": "TaskMiddleWare",
                            "responseType": "Empty"
                        },
                        "DeleteTaskMiddleware": {
                            "requestType": "TaskMiddleWare",
                            "responseType": "Empty"
                        },
                        "GetTaskMiddleware": {
                            "requestType": "QueryRequest",
                            "responseType": "TaskMiddlewareList"
                        },
                        "CreateTaskCert": {
                            "requestType": "TaskCert",
                            "responseType": "TaskCert"
                        },
                        "DeleteTaskCert": {
                            "requestType": "TaskCert",
                            "responseType": "Empty"
                        },
                        "GetTaskCert": {
                            "requestType": "TaskCert",
                            "responseType": "TaskCertList"
                        }
                    }
                },
                "QueryRequest": {
                    "fields": {
                        "id": {
                            "type": "int64",
                            "id": 1
                        },
                        "task_id": {
                            "type": "string",
                            "id": 2
                        }
                    }
                },
                "TaskMicroSrvList": {
                    "fields": {
                        "list": {
                            "rule": "repeated",
                            "type": "TaskMicroSrv",
                            "id": 1
                        },
                        "total": {
                            "type": "int32",
                            "id": 2
                        }
                    }
                },
                "TaskMiddlewareList": {
                    "fields": {
                        "list": {
                            "rule": "repeated",
                            "type": "TaskMiddleWare",
                            "id": 1
                        },
                        "total": {
                            "type": "int32",
                            "id": 2
                        }
                    }
                },
                "TaskSlbList": {
                    "fields": {
                        "list": {
                            "rule": "repeated",
                            "type": "TaskSlb",
                            "id": 1
                        },
                        "total": {
                            "type": "int32",
                            "id": 2
                        }
                    }
                },
                "TaskCertList": {
                    "fields": {
                        "list": {
                            "rule": "repeated",
                            "type": "TaskCert",
                            "id": 1
                        },
                        "total": {
                            "type": "int32",
                            "id": 2
                        }
                    }
                },
                "BuildTaskReq": {
                    "fields": {
                        "task_id": {
                            "type": "string",
                            "id": 1
                        },
                        "id": {
                            "type": "int64",
                            "id": 2
                        }
                    }
                },
                "CloneTaskReq": {
                    "fields": {
                        "task_id": {
                            "type": "string",
                            "id": 1
                        },
                        "id": {
                            "type": "int64",
                            "id": 2
                        },
                        "user_name": {
                            "type": "string",
                            "id": 3
                        },
                        "user_id": {
                            "type": "string",
                            "id": 4
                        }
                    }
                },
                "TaskConfigMap": {
                    "fields": {
                        "name": {
                            "type": "string",
                            "id": 1
                        },
                        "namespace": {
                            "type": "string",
                            "id": 2
                        },
                        "data": {
                            "keyType": "string",
                            "type": "string",
                            "id": 3
                        }
                    }
                },
                "CreatePackTaskReq": {
                    "fields": {
                        "task_name": {
                            "type": "string",
                            "id": 1
                        },
                        "user_name": {
                            "type": "string",
                            "id": 2
                        },
                        "user_id": {
                            "type": "string",
                            "id": 3
                        },
                        "status": {
                            "type": "TaskStatus",
                            "id": 4
                        },
                        "rancher": {
                            "type": "RancherInfo",
                            "id": 6
                        },
                        "mirrors": {
                            "keyType": "string",
                            "type": "MirrorStore",
                            "id": 7
                        },
                        "pub_params": {
                            "keyType": "string",
                            "type": "string",
                            "id": 8
                        },
                        "namespaces": {
                            "rule": "repeated",
                            "type": "string",
                            "id": 9
                        },
                        "pro_name": {
                            "type": "string",
                            "id": 10
                        },
                        "cluster_name": {
                            "type": "string",
                            "id": 11
                        },
                        "task_id": {
                            "type": "string",
                            "id": 12
                        },
                        "id": {
                            "type": "int64",
                            "id": 13
                        },
                        "configMaps": {
                            "rule": "repeated",
                            "type": "TaskConfigMap",
                            "id": 14
                        }
                    }
                },
                "QueryPackTaskList": {
                    "fields": {
                        "offset": {
                            "type": "int32",
                            "id": 1
                        },
                        "limit": {
                            "type": "int32",
                            "id": 2
                        },
                        "task_name": {
                            "type": "string",
                            "id": 3
                        },
                        "user_name": {
                            "type": "string",
                            "id": 4
                        },
                        "status": {
                            "type": "TaskStatus",
                            "id": 5
                        }
                    }
                },
                "TaskDetailReq": {
                    "fields": {
                        "id": {
                            "type": "int64",
                            "id": 1
                        },
                        "task_id": {
                            "type": "string",
                            "id": 2
                        }
                    }
                },
                "PackTaskList": {
                    "fields": {
                        "list": {
                            "rule": "repeated",
                            "type": "SimpleTask",
                            "id": 1
                        },
                        "total": {
                            "type": "int32",
                            "id": 2
                        }
                    }
                },
                "DeleteTaskReq": {
                    "fields": {
                        "id": {
                            "type": "int64",
                            "id": 1
                        },
                        "task_id": {
                            "type": "string",
                            "id": 2
                        }
                    }
                },
                "SimpleTask": {
                    "fields": {
                        "task_name": {
                            "type": "string",
                            "id": 1
                        },
                        "user_name": {
                            "type": "string",
                            "id": 2
                        },
                        "status": {
                            "type": "TaskStatus",
                            "id": 3
                        },
                        "update_time": {
                            "type": "int64",
                            "id": 4
                        },
                        "id": {
                            "type": "int64",
                            "id": 5
                        },
                        "task_id": {
                            "type": "string",
                            "id": 6
                        },
                        "download_addr": {
                            "type": "string",
                            "id": 7
                        }
                    }
                },
                "TaskStatus": {
                    "values": {
                        "_": 0,
                        "unpack": 1,
                        "packed": 2,
                        "failed": 3,
                        "success": 4
                    }
                },
                "PackTask": {
                    "fields": {
                        "task_name": {
                            "type": "string",
                            "id": 1
                        },
                        "user_name": {
                            "type": "string",
                            "id": 2
                        },
                        "user_id": {
                            "type": "string",
                            "id": 13
                        },
                        "status": {
                            "type": "TaskStatus",
                            "id": 3
                        },
                        "middle_wares": {
                            "rule": "repeated",
                            "type": "TaskMiddleWare",
                            "id": 4
                        },
                        "micro_srvs": {
                            "rule": "repeated",
                            "type": "TaskMicroSrv",
                            "id": 5
                        },
                        "pub_params": {
                            "keyType": "string",
                            "type": "string",
                            "id": 15
                        },
                        "certs": {
                            "rule": "repeated",
                            "type": "TaskCert",
                            "id": 6
                        },
                        "rancher": {
                            "type": "RancherInfo",
                            "id": 7
                        },
                        "mirrors": {
                            "keyType": "string",
                            "type": "MirrorStore",
                            "id": 8
                        },
                        "slbs": {
                            "rule": "repeated",
                            "type": "TaskSlb",
                            "id": 9
                        },
                        "namespaces": {
                            "rule": "repeated",
                            "type": "string",
                            "id": 10
                        },
                        "pro_name": {
                            "type": "string",
                            "id": 11
                        },
                        "cluster_name": {
                            "type": "string",
                            "id": 12
                        },
                        "task_id": {
                            "type": "string",
                            "id": 14
                        },
                        "download_addr": {
                            "type": "string",
                            "id": 16
                        },
                        "configMaps": {
                            "rule": "repeated",
                            "type": "TaskConfigMap",
                            "id": 17
                        }
                    }
                },
                "TaskMiddleWare": {
                    "fields": {
                        "name": {
                            "type": "string",
                            "id": 1
                        },
                        "version": {
                            "type": "string",
                            "id": 2
                        },
                        "meta": {
                            "keyType": "string",
                            "type": "string",
                            "id": 3
                        },
                        "package": {
                            "type": "string",
                            "id": 4
                        },
                        "type": {
                            "type": "string",
                            "id": 5
                        },
                        "marks": {
                            "type": "string",
                            "id": 6
                        },
                        "id": {
                            "type": "int64",
                            "id": 7
                        },
                        "task_id": {
                            "type": "string",
                            "id": 8
                        },
                        "create_time": {
                            "type": "int64",
                            "id": 10
                        },
                        "update_time": {
                            "type": "int64",
                            "id": 11
                        },
                        "setted": {
                            "type": "int32",
                            "id": 12
                        },
                        "origin_id": {
                            "type": "int32",
                            "id": 13
                        },
                        "parent_name": {
                            "type": "string",
                            "id": 14
                        },
                        "deployment_type": {
                            "type": "string",
                            "id": 15
                        }
                    }
                },
                "TaskMicroSrv": {
                    "fields": {
                        "micro_service": {
                            "type": "MicroService",
                            "id": 1
                        },
                        "task_id": {
                            "type": "string",
                            "id": 2
                        },
                        "namespace": {
                            "type": "string",
                            "id": 3
                        },
                        "origin_id": {
                            "type": "int64",
                            "id": 4
                        },
                        "setted": {
                            "type": "int32",
                            "id": 5
                        }
                    }
                },
                "GetPublicVarNameResponse": {
                    "fields": {
                        "name": {
                            "rule": "repeated",
                            "type": "string",
                            "id": 1
                        }
                    }
                },
                "TaskSlb": {
                    "fields": {
                        "id": {
                            "type": "int64",
                            "id": 1
                        },
                        "name": {
                            "type": "string",
                            "id": 2
                        },
                        "task_id": {
                            "type": "string",
                            "id": 3
                        },
                        "host": {
                            "type": "string",
                            "id": 4
                        },
                        "namespace": {
                            "type": "string",
                            "id": 5
                        },
                        "routers": {
                            "rule": "repeated",
                            "type": "RouterInfo",
                            "id": 6
                        },
                        "certs": {
                            "rule": "repeated",
                            "type": "int64",
                            "id": 7
                        },
                        "user_name": {
                            "type": "string",
                            "id": 8
                        },
                        "user_id": {
                            "type": "string",
                            "id": 9
                        }
                    }
                },
                "RouterInfo": {
                    "fields": {
                        "path": {
                            "type": "string",
                            "id": 1
                        },
                        "workload": {
                            "type": "string",
                            "id": 2
                        },
                        "targetPort": {
                            "type": "string",
                            "id": 3
                        }
                    }
                },
                "TaskCert": {
                    "fields": {
                        "name": {
                            "type": "string",
                            "id": 1
                        },
                        "signer": {
                            "type": "string",
                            "id": 2
                        },
                        "expire_date": {
                            "type": "int64",
                            "id": 3
                        },
                        "task_id": {
                            "type": "string",
                            "id": 4
                        },
                        "id": {
                            "type": "int64",
                            "id": 5
                        },
                        "IP": {
                            "rule": "repeated",
                            "type": "string",
                            "id": 7
                        },
                        "host": {
                            "rule": "repeated",
                            "type": "string",
                            "id": 8
                        },
                        "private_key": {
                            "type": "string",
                            "id": 9
                        },
                        "content": {
                            "type": "string",
                            "id": 10
                        },
                        "update_time": {
                            "type": "int64",
                            "id": 11
                        },
                        "origin_id": {
                            "type": "int64",
                            "id": 12
                        },
                        "user_name": {
                            "type": "string",
                            "id": 13
                        },
                        "user_id": {
                            "type": "string",
                            "id": 14
                        }
                    }
                },
                "MirrorStore": {
                    "fields": {
                        "mirror_url": {
                            "type": "string",
                            "id": 1
                        },
                        "token_name": {
                            "type": "string",
                            "id": 2
                        },
                        "account": {
                            "type": "string",
                            "id": 3
                        },
                        "passwd": {
                            "type": "string",
                            "id": 4
                        }
                    }
                },
                "RancherInfo": {
                    "fields": {
                        "rancher_url": {
                            "type": "string",
                            "id": 1
                        },
                        "rancher_token": {
                            "type": "string",
                            "id": 2
                        },
                        "rancher_port": {
                            "type": "int32",
                            "id": 3
                        },
                        "auto_install_rancher": {
                            "type": "bool",
                            "id": 4
                        },
                        "http_port": {
                            "type": "int32",
                            "id": 5
                        },
                        "https_port": {
                            "type": "int32",
                            "id": 6
                        },
                        "rancher_host": {
                            "type": "string",
                            "id": 7
                        },
                        "auto_gen_parameter": {
                            "type": "bool",
                            "id": 8
                        },
                        "auto_install_kubernetes": {
                            "type": "bool",
                            "id": 9
                        },
                        "kubernetes_version": {
                            "type": "string",
                            "id": 10
                        },
                        "kubernetes_master_hosts": {
                            "type": "string",
                            "id": 11
                        },
                        "kubernetes_work_hosts": {
                            "type": "string",
                            "id": 12
                        }
                    }
                },
                "Empty": {
                    "fields": {}
                },
                "ConfigMapService": {
                    "methods": {
                        "CreateConfigMap": {
                            "requestType": "CreateConfigMapRequest",
                            "responseType": "Empty"
                        },
                        "GetConfigMapList": {
                            "requestType": "GetConfigMapListRequest",
                            "responseType": "GetConfigMapListResponse"
                        },
                        "UpdateConfigMap": {
                            "requestType": "UpdateConfigMapRequest",
                            "responseType": "Empty"
                        },
                        "DeleteConfigMap": {
                            "requestType": "DeleteConfigMapRequest",
                            "responseType": "Empty"
                        }
                    }
                },
                "ConfigMap": {
                    "fields": {
                        "name": {
                            "type": "string",
                            "id": 1
                        },
                        "data": {
                            "keyType": "string",
                            "type": "string",
                            "id": 2
                        },
                        "description": {
                            "type": "string",
                            "id": 3
                        },
                        "id": {
                            "type": "int64",
                            "id": 4
                        },
                        "creator": {
                            "type": "string",
                            "id": 5
                        },
                        "creator_id": {
                            "type": "string",
                            "id": 6
                        },
                        "create_time": {
                            "type": "int64",
                            "id": 7
                        },
                        "update_time": {
                            "type": "int64",
                            "id": 8
                        }
                    }
                },
                "CreateConfigMapRequest": {
                    "fields": {
                        "configMap": {
                            "type": "ConfigMap",
                            "id": 1
                        },
                        "user_id": {
                            "type": "string",
                            "id": 2
                        },
                        "user_name": {
                            "type": "string",
                            "id": 3
                        }
                    }
                },
                "GetConfigMapListRequest": {
                    "fields": {
                        "offset": {
                            "type": "int32",
                            "id": 1
                        },
                        "limit": {
                            "type": "int32",
                            "id": 2
                        },
                        "user_name": {
                            "type": "string",
                            "id": 3
                        },
                        "name": {
                            "type": "string",
                            "id": 4
                        },
                        "id": {
                            "type": "int64",
                            "id": 5
                        }
                    }
                },
                "GetConfigMapListResponse": {
                    "fields": {
                        "configMap": {
                            "rule": "repeated",
                            "type": "ConfigMap",
                            "id": 1
                        },
                        "total": {
                            "type": "int32",
                            "id": 2
                        }
                    }
                },
                "UpdateConfigMapRequest": {
                    "fields": {
                        "configMap": {
                            "type": "ConfigMap",
                            "id": 1
                        },
                        "user_id": {
                            "type": "string",
                            "id": 2
                        },
                        "user_name": {
                            "type": "string",
                            "id": 3
                        }
                    }
                },
                "DeleteConfigMapRequest": {
                    "fields": {
                        "id": {
                            "type": "int64",
                            "id": 1
                        },
                        "user_id": {
                            "type": "string",
                            "id": 2
                        },
                        "user_name": {
                            "type": "string",
                            "id": 3
                        }
                    }
                }
            }
        }
    }
}