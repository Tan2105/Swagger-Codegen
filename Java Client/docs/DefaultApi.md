# DefaultApi

All URIs are relative to *http://restapi.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**employeeGet**](DefaultApi.md#employeeGet) | **GET** /employee | 
[**employeePut**](DefaultApi.md#employeePut) | **PUT** /employee | 
[**employeefindGet**](DefaultApi.md#employeefindGet) | **GET** /employee{find} | 
[**employeeidDelete**](DefaultApi.md#employeeidDelete) | **DELETE** /employee{id} | 

<a name="employeeGet"></a>
# **employeeGet**
> Employees employeeGet(employeename)



Operation to fetch all the employees

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.DefaultApi;


DefaultApi apiInstance = new DefaultApi();
String employeename = "employeename_example"; // String | 
try {
    Employees result = apiInstance.employeeGet(employeename);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling DefaultApi#employeeGet");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employeename** | **String**|  |

### Return type

[**Employees**](Employees.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="employeePut"></a>
# **employeePut**
> employeePut(body)



Updates an existing employee

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.DefaultApi;


DefaultApi apiInstance = new DefaultApi();
Employee body = new Employee(); // Employee | 
try {
    apiInstance.employeePut(body);
} catch (ApiException e) {
    System.err.println("Exception when calling DefaultApi#employeePut");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Employee**](Employee.md)|  | [optional]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="employeefindGet"></a>
# **employeefindGet**
> Employees employeefindGet(find)



### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.DefaultApi;


DefaultApi apiInstance = new DefaultApi();
String find = "find_example"; // String | 
try {
    Employees result = apiInstance.employeefindGet(find);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling DefaultApi#employeefindGet");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **find** | **String**|  |

### Return type

[**Employees**](Employees.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="employeeidDelete"></a>
# **employeeidDelete**
> Employee employeeidDelete(id)



### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.DefaultApi;


DefaultApi apiInstance = new DefaultApi();
Integer id = 56; // Integer | 
try {
    Employee result = apiInstance.employeeidDelete(id);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling DefaultApi#employeeidDelete");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**|  |

### Return type

[**Employee**](Employee.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

