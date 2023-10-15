import { validateForms } from '../functions/validate-forms';

const rules = [
	/*{
		ruleSelector: '.input-name',
		rules: [
			{
				rule: 'minLength',
				value: 3
			},
			{
				rule: 'required',
				value: true,
				errorMessage: 'Заполните имя!'
			}
		]
	},*/
	/*{
	  ruleSelector: '.input-tel',
	  tel: true,
	  telError: 'Введите корректный телефон',
	  rules: [
		{
		  rule: 'required',
		  value: true,
		  errorMessage: 'Заполните телефон!'
		}
	  ]
	},*/
	{
		ruleSelector: '.input-email',
		rules: [
			{
				rule: 'required',
				value: true,
				errorMessage: 'Недопустимый формат'
			},
			{
				rule: 'email',
				value: true,
				errorMessage: 'Заполните Email'
			}
		]
	},
];

const afterForm = () => {
	console.log('Произошла отправка, тут можно писать любые действия');
};

validateForms('.news__form', rules, afterForm);



/*const rules1 = [
	{
		ruleSelector: '.input-name',
		rules: [
			{
				rule: 'minLength',
				value: 3
			},
			{
				rule: 'required',
				value: true,
				errorMessage: 'Недопустимый формат'
			}
		]
	},
	/*{
	  ruleSelector: '.input-tel',
	  tel: true,
	  telError: 'Введите корректный телефон',
	  rules: [
		{
		  rule: 'required',
		  value: true,
		  errorMessage: 'Заполните телефон!'
		}
	  ]
	},*/
	/*{
		ruleSelector: '.input-email1',
		rules: [
			{
				rule: 'required',
				value: true,
				errorMessage: 'Недопустимый формат'
			},
			{
				rule: 'email',
				value: true,
				errorMessage: 'Заполните Email'
			}
		]
	},
];

const afterForm1 = () => {
	console.log('Произошла отправка, тут можно писать любые действия');
};

validateForms('.contacts__form', rules1, afterForm1);*/

const rules1 = [
	{
		ruleSelector: '.input-name',
		rules: [
			{
				rule: 'minLength',
				value: 3
			},
			{
				rule: 'required',
				value: true,
				errorMessage: 'Недопустимый формат'
			}
		]
	},
	{
	  ruleSelector: '.input-tel1',
	  tel: true,
	  telError: 'Введите корректный телефон',
	  rules: [
		{
		  rule: 'required',
		  value: true,
		  errorMessage: 'Заполните телефон!'
		}
	  ]
	},
	{
		ruleSelector: '.input-email',
		rules: [
			{
				rule: 'required',
				value: true,
				errorMessage: 'Недопустимый формат'
			},
			{
				rule: 'email',
				value: true,
				errorMessage: 'Заполните Email'
			}
		]
	},
];

const afterForm1 = () => {
	console.log('Произошла отправка, тут можно писать любые действия');
};

validateForms('.graph-modal__form', rules1, afterForm1);
