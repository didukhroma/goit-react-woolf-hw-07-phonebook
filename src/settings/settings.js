/**
 * Description
 *
 * @type {{ contacts: {}; filter: ''; }}
 * @example const INITIAL_STATE_APP = {
  contacts: {
    items: [  ],
    isLoading: false,
    error: null,
  },

  filter: '',
};
 *
 */
export const INITIAL_STATE_APP = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },

  filter: '',
};

/**
 * Description
 *
 * @type {string}
 * @example const LOCAL_STORAGE_KEY = 'contacts';
 *
 */
export const LOCAL_STORAGE_KEY = 'contacts';

/**
 * Description
 *
 * @type {{ name: string; number: string; }}
 * @example const INITIAL_STATE_FORM = {
  name: '',
  number: '',
};
 *
 */
export const INITIAL_STATE_FORM = {
  name: '',
  number: '',
};
