// Everything in here is publicly accessible


const settings = {
	benefitCategories: [
		{
			key: 'ridership',
			text: {
				en: {
					title: "Ridership",
					description: "Increase transit ridership",
				},
				es: {
					title: "Pasajeros",
					description: "Aumentar el número de viajeros en tránsito",
				},
			},
		},
		{
			key: 'accessToTransit',
			text: {
				en: {
					title: "Access to Transit",
					description: "Increase the number of people who can easily access transit",
				},
				es: {
					title: "Acceso al Tránsito",
					description: "Aumentar el número de personas que pueden acceder fácilmente al tránsito",
				},
			},
		},
		{
			key: 'passengerExperience',
			text: {
				en: {
					title: "Passenger Experience",
					description: "Improve the experience of riding transit",
				},
				es: {
					title: "Experiencia del Pasajero",
					description: "Mejorar la experiencia de viajar en tránsito",
				},
			},
		},
	],
	costStyle: 'dollar',
	dbCollectionName: "blackrock",
	maxCost: 15,
	saveResponses: true,
	commentBoxEnabled: true,
	commentBoxMaxCharacters: 250,
	translationEnabled: true,
	text: {
		en: {
			siteTitle: "Black Rock Transit: Design Your Transit System",
			headerTitle: "Black Rock Transit: <span class=\"subtitle\">Design Your Transit System</span>",
			logoAlt: "Black Rock Transit",
			introText: "<h2>How would you improve Black Rock Transit?</h2><p>BlinkTag wants your suggestions for improving the Black Rock Transit system.<br><br>This survey allows you to select potential improvements that you think will help improve Black Rock Transit.</p>",
			benefitCategoriesSectionTitle: "Benefit Categories",
			howItWorksTitle: "Design your transit system",
			howItWorksContent: "<ul class=\"list-disc\"><li>Scroll down to see the strategies that could improve transit in Black Rock City.</li><li>You have a total budget of 15 dollar signs ($). Mix and match potential improvements to see how the costs and benefits change by clicking the check boxes below.</li><li>Spend your budget by selecting your preferred strategies.</li></ul>",
			translationContent: "Completar la encuesta en español",
			dashboardTitleBenefits: "Your Overall Benefits",
			dashboardTitleCosts: "Your Costs",
			totalCostTitle: "Budget: $15",
			costTitle: "Cost",
			resetTitle: "Reset",
			submitTitle: "Submit",
			footerCopyright: "&copy; 2023 <a href=\"https://blinktag.com\" target=\"_blank\">BlinkTag Inc</a>",
			footerAbout: "This was made using the “Survey_Customizer” folder.",
			modalExceededTitle: "Budget Exhausted",
			modalExceededContent: "You've exceeded your budget. Please change your selections to reallocate your funds before submitting.",
			modalNoneTitle: "No Budget Created",
			modalNoneContent: "You haven't selected any strategies. Choose at least one strategy and then try submitting again.",
			modalLeftoverTitle: "Budget Remaining",
			modalLeftoverContent: "You still have some budget remaining! Is there anything else you would like to select?",
			modalSubmitTitle: "Last Chance",
			modalSubmitContent: "If you would like, leave a comment below (250 characters max)",
			modalPostSubmitTitle: "Thank you!",
			modalPostSubmitContent: "Thanks for taking the time to complete our survey. We value your feedback very much.",
			modalCloseButton: "Close",
			modalGoBackButton: "Go Back",
			modalContinueButton: "Continue",
			modalSubmitButton: "Submit",
		},
		es: {
			siteTitle: "Black Rock Transit: Diseñe su sistema de tránsito",
			headerTitle: "Black Rock Transit: <span class=\"subtitle\">Diseñe su sistema de tránsito</span>",
			logoAlt: "Black Rock Transit",
			introText: "<h2>¿Cómo mejorarías Black Rock Transit?</h2><p>BlinkTag wants your suggestions for improving the Black Rock Transit system.<br><br>This survey allows you to select potential improvements that you think will help improve Black Rock Transit.</p>",
			benefitCategoriesSectionTitle: "undefined",
			howItWorksTitle: "Así es cómo Funciona:",
			howItWorksContent: "<ul class=\"list-disc\"><li>Desplácese hacia abajo para ver las estrategias que podrían mejorar el tránsito en Black Rock City.</li><li>Tienes 15 signos de dólar ($) para gastar. Combine y mejore posibles mejoras para ver cómo cambian los costos y beneficios al hacer clic en las casillas de verificación a continuación.</li><li>Pase su presupuesto seleccionando sus estrategias preferidas.</li></ul>",
			translationContent: "Translate to English",
			dashboardTitleBenefits: "Sus Beneficios Generales",
			dashboardTitleCosts: "Sus Costos",
			totalCostTitle: "Presupuesto: $15",
			costTitle: "Costo",
			resetTitle: "Reiniciar",
			submitTitle: "Enviar",
			footerCopyright: "&copy; 2023 <a href=\"https://blinktag.com\" target=\"_blank\">BlinkTag Inc</a>",
			footerAbout: "Esto se hizo usando la carpeta \"Survey_Customizer\".",
			modalExceededTitle: "Presupuesto agotado",
			modalExceededContent: "Has superado tu presupuesto. Cambie sus selecciones para reasignar sus fondos antes de enviarlos.",
			modalNoneTitle: "No hay presupuesto creado",
			modalNoneContent: "No has seleccionado ninguna estrategia. Elija al menos una estrategia y luego intente volver a enviarla.",
			modalLeftoverTitle: "Presupuesto restante",
			modalLeftoverContent: "¡Todavía tienes un presupuesto pendiente! ¿Hay algo más que le gustaría seleccionar?",
			modalSubmitTitle: "Última oportunidad",
			modalSubmitContent: "Si lo desea, deje un comentario a continuación (250 caracteres como máximo)",
			modalPostSubmitTitle: "¡Gracias!",
			modalPostSubmitContent: "Gracias por tomarse el tiempo de completar nuestra encuesta. Valoramos mucho sus comentarios.",
			modalCloseButton: "Cerrar",
			modalGoBackButton: "Regresar",
			modalContinueButton: "Continuar",
			modalSubmitButton: "Enviar",
		},
	},
	}


export default settings