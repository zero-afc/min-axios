type MethodType = 'GET' | 'POST' | 'PUT' | 'DELETE'

// uniapp 和 wx 共有的属性
export interface CommonConfigOptions<T extends Record<keyof any, any>> {
	baseURL: string
	data: T
	header: Record<keyof any, any> // 暂定
	timeout: number
	method: MethodType
	dataType: string
	responseType: string
	enableHttp2: boolean
	enableQuic: boolean
	enableCache: boolean
	enableHttpDNS: boolean
	httpDNSServiceId: string
	enableChunked: boolean
	forceCellularNetwork: boolean
	success: (...arg: any[]) => void
	fail: (...arg: any[]) => void
	complete: (...arg: any[]) => void
}

// uniapp 提供的接口
export interface UniAppRequestConfig {
	enableCookie: boolean
	cloudCache: boolean | Record<keyof any, any>
	defer: boolean
}

// wx 提供的接口
export interface WxAppRequestConfig<T extends Record<keyof any, any>> extends CommonConfigOptions<T> {}
