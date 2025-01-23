export const projects = [
	{
		id: 1,
		slug: 'headway-riverine',
		name: 'Headway Riverine',
		status: 'new', // new, ready, underconstruction, soldOut
		residentialType: 'Residential',
		city: 'Noida',
		location: 'Sector 44',
		map_data: {
			gmap_direction: 'https://www.google.com/maps/dir/?api=1&destination=28.5591394,77.339106',
			gmap_address: 'H85Q+QH4, Block D, Sector 44, Noida, Uttar Pradesh 201303',
			time_to_reach: [
				{
					title: 'Noida Golf Course Road',
					distance: '1.5 km',
					time: '2 hours 30 minutes',
					icon: 'iconamoon:lightning-1-thin'
				},
				{
					title: 'Noida Botanical Garden',
					distance: '0.8 km',
					time: '1 hour 45 minutes',
					icon: 'iconamoon:lightning-1-thin'
				},
				{
					title: 'Noida Central Market',
					distance: '1.2 km',
					time: '1 hour 15 minutes',
					icon: 'iconamoon:lightning-1-thin'
				}
			]
		},
		nebhourhood:
			'Located in the prime location of Headway Sector 44, Noida, this address offers seamless access to Noida Golf Course Road and the Botanical Garden.',
		time_of_possession: 'January 2030',
		images: [
			'https://placehold.co/550x550/png',
			'https://placehold.co/550x550/png',
			'https://placehold.co/550x550/png'
		],
		floor_plan: 'https://example.com/floor-plan.pdf',
		amenities: [
			{
				id: 1,
				title: 'Swimming Pool',
				description: '200-litre swimming pool with free access to the pool',
				icon: 'iconamoon:lightning-1-thin'
			},
			{
				id: 2,
				title: 'Gymnasium',
				description: '200-seater gymnasium with a fitness center',
				icon: 'iconamoon:dumbbell-1-thin'
			},
			{
				id: 3,
				title: 'Air-conditioning',
				description: 'Central air-conditioning system for comfortable living',
				icon: 'iconamoon:air-conditioner-1-thin'
			}
		],
		description:
			'Located in the heart of Noida, Headway Riverine offers a premium residential complex with 3.5 and 4-bedroom apartments, perfect for families and couples looking for a luxurious and stylish living experience.',
		gallery: [
			{
				id: 1,
				title: 'Living Room',
				image: 'https://placehold.co/1146x1146/png'
			},
			{
				id: 2,
				title: 'Bedroom 1',
				image: 'https://placehold.co/1146x1146/png'
			}
		],
		downloadables: [
			{
				id: 1,
				title: 'Floor Plan',
				file: 'https://example.com/floor-plan.pdf'
			},
			{
				id: 2,
				title: 'Property Brochure',
				file: 'https://example.com/property-brochure.pdf'
			}
		],
		prices: [
			{
				id: 1,
				name: '2 BHK',
				minimum_price: 73000000,
				maximum_price: 73000000
			},
			{
				id: 2,
				name: '3.5 BHK',
				minimum_price: 72000000,
				maximum_price: 113000000
			},
			{
				id: 3,
				name: '4 BHK',
				minimum_price: 94900000,
				maximum_price: 104900000
			},
			{
				id: 4,
				name: 'Studios',
				minimum_price: 4900000,
				maximum_price: 5900000
			}
		]
	},
	{
		id: 2,
		slug: 'green-haven',
		name: 'Green Haven',
		status: 'underconstruction',
		residentialType: 'Luxury',
		city: 'Gurgaon',
		location: 'Sector 55',
		map_data: {
			gmap_direction: 'https://www.google.com/maps/dir/?api=1&destination=28.464927,77.052407',
			gmap_address: 'Sector 55, Gurgaon, Haryana',
			time_to_reach: [
				{
					title: 'Cyber City',
					distance: '10 km',
					time: '30 minutes',
					icon: 'iconamoon:lightning-1-thin'
				},
				{
					title: 'MG Road Metro Station',
					distance: '8 km',
					time: '20 minutes',
					icon: 'iconamoon:lightning-1-thin'
				}
			]
		},
		nebhourhood:
			'Green Haven offers a tranquil lifestyle amidst lush greenery in Gurgaon, Sector 55.',
		time_of_possession: 'December 2026',
		images: ['https://placehold.co/550x550/png', 'https://placehold.co/550x550/png'],
		floor_plan: 'https://example.com/floor-plan-green-haven.pdf',
		amenities: [
			{
				id: 1,
				title: 'Clubhouse',
				description: 'A state-of-the-art clubhouse with modern facilities',
				icon: 'iconamoon:clubhouse-1-thin'
			},
			{
				id: 2,
				title: 'Children’s Play Area',
				description: 'Play area designed for kids of all ages',
				icon: 'iconamoon:kids-1-thin'
			}
		],
		description: 'Green Haven combines luxury and serenity to offer a premium residential complex.',
		gallery: [
			{
				id: 1,
				title: 'Main Entrance',
				image: 'https://placehold.co/1146x1146/png'
			}
		],
		downloadables: [
			{
				id: 1,
				title: 'Brochure',
				file: 'https://example.com/green-haven-brochure.pdf'
			}
		],
		prices: [
			{
				id: 1,
				name: '3 BHK',
				minimum_price: 85000000,
				maximum_price: 90000000
			}
		]
	}
];
