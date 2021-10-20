import { CancelToken } from 'axios';

type IService<D, T> = (data: D, abort?: CancelToken) => Promise<T>;

export default IService;
