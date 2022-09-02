const produtos = {
    sorvetes: [
        {
            nome: 'Duis luctus',
            id: 'sorv1',
            img: 'sorv1',
            descricao: 'Duis tristique erat vel sollicitudin auctor. Cras tortor nunc, varius sed enim sit amet.',
            sabores: [
                'Menta', 'Creme', 'Baunilha', 'Chocolate', 'Castanhas'
            ]
        },
        {
            nome: 'Suspendisse sed',
            id: 'sorv2',
            img: 'sorv2',
            descricao: 'Donec viverra odio eu ante consequat, id eleifend ipsum tristique. Nullam condimentum sed urna at tincidunt.',
            sabores: [
                'Amora', 'Framboesa', 'Mirtilo', 'Cereja'
            ]
        },
        {
            nome: 'Nullam tristique',
            id: 'sorv3',
            img: 'sorv3',
            descricao: 'Duis tristique erat vel sollicitudin auctor. Cras tortor nunc, varius sed enim sit amet.',
            sabores: [
                'Chocolate', 'Baunilha', 'Misto'
            ]
        },
        {
            nome: 'Maecenas dignissim',
            id: 'sorv4',
            img: 'sorv4',
            descricao: 'Donec viverra odio eu ante consequat, id eleifend ipsum tristique. Nullam condimentum sed urna at tincidunt.',
            sabores: [
                'Chiclete', 'Tutti-fruti', 'Jujuba'
            ]
        },
        {
            nome: 'Aliquam',
            id: 'sorv5',
            img: 'sorv5',
            descricao: 'Sed mattis neque purus, ac mollis urna rhoncus non. Proin faucibus interdum nisi, quis auctor.',
            sabores: [
                'Pistache', 'Amendoa', 'Castanha de caju', 'Amendoim', 'Nozes'
            ]
        },
        {
            nome: 'Donec',
            id: 'sorv6',
            img: 'sorv6',
            descricao: 'Donec viverra odio eu ante consequat, id eleifend ipsum tristique. Nullam condimentum sed urna at tincidunt.',
            sabores: [
                'Chocolate', 'Biscoito', 'Pave', 'Creme', 'Flocos'
            ]
        },
        {
            nome: 'Quisque',
            id: 'sorv7',
            img: 'sorv7',
            descricao: 'Duis tristique erat vel sollicitudin auctor. Cras tortor nunc, varius sed enim sit amet.',
            sabores: [
                'Chocolate', 'Morango'
            ]
        },
        {
            nome: 'Phasellus',
            id: 'sorv8',
            img: 'sorv8',
            descricao: 'Sed mattis neque purus, ac mollis urna rhoncus non. Proin faucibus interdum nisi, quis auctor.',
            sabores: [
                'Baunilha', 'Biscoito', 'Cereja', 'Chocolate'
            ]
        },
        {
            nome: 'Sed mattis',
            id: 'sorv9',
            img: 'sorv9',
            descricao: 'Duis tristique erat vel sollicitudin auctor. Cras tortor nunc, varius sed enim sit amet.',
            sabores: [
                'Menta', 'Chocolate'
            ]
        }
    ],
    picoles: [
        {
            nome: 'Maecenas dignissim',
            id: 'pi1',
            img: 'pi1',
            descricao: 'Donec viverra odio eu ante consequat, id eleifend ipsum tristique. Nullam condimentum sed urna at tincidunt.',
            sabores: [
                'Morango', 'Amora', 'Uva', 'Abacaxi'
            ]
        },
        {
            nome: 'Suspendisse semper',
            id: 'pi2',
            img: 'pi2',
            descricao: 'Duis tristique erat vel sollicitudin auctor. Cras tortor nunc, varius sed enim sit amet.',
            sabores: [
                'Chocolate', 'Chocolate branco', 'Morango'
            ]
        },
        {
            nome: 'Sed mattis',
            id: 'pi3',
            img: 'pi3',
            descricao: 'Sed mattis neque purus, ac mollis urna rhoncus non. Proin faucibus interdum nisi, quis auctor.',
            sabores: [
               'Amora e abacaxi', 'Manga e pera', 'Goiaba e banana', 'Ameixa e caqui'
            ]
        },
        {
            nome: 'Pellentesque',
            id: 'pi4',
            img: 'pi4',
            descricao: 'Donec viverra odio eu ante consequat, id eleifend ipsum tristique. Nullam condimentum sed urna at tincidunt.',
            sabores: [
                'Biscoito'
            ]
        },
        {
            nome: 'Aliquam accumsan',
            id: 'pi5',
            img: 'pi5',
            descricao: 'Duis tristique erat vel sollicitudin auctor. Cras tortor nunc, varius sed enim sit amet.',
            sabores: [
                'Laranja', 'Limao', 'Acerola', 'Tangerina', 'Abacaxi', 'Graviola'
            ]
        },
        {
            nome: 'Donec',
            id: 'pi6',
            img: 'pi6',
            descricao: 'Sed mattis neque purus, ac mollis urna rhoncus non. Proin faucibus interdum nisi, quis auctor.',
            sabores: [
                'Jujuba', 'Caramelo', 'Tutti-frutti'
            ]
        }  
    ],
    especiais: [
        {
            nome: 'Duis tristique',
            id: 'esp1',
            img: 'esp1',
            descricao: 'Donec viverra odio eu ante consequat, id eleifend ipsum tristique. Nullam condimentum sed urna at tincidunt.',
        },
        {
            nome: 'Maecenas',
            id: 'esp2',
            img: 'esp2',
            descricao: 'Duis tristique erat vel sollicitudin auctor. Cras tortor nunc, varius sed enim sit amet.',
            sabores: [
                'Morango', 'Banana'
            ]
        },
        {
            nome: 'Duis laoreet ',
            id: 'esp3',
            img: 'esp3',
            descricao: 'Sed mattis neque purus, ac mollis urna rhoncus non. Proin faucibus interdum nisi, quis auctor.',
            sabores: [
                'Chocolate', 'Nozes', 'Pessego'
            ]
        },
        {
            nome: 'Pellentesque',
            id: 'esp4',
            img: 'esp4',
            descricao: 'Donec viverra odio eu ante consequat, id eleifend ipsum tristique. Nullam condimentum sed urna at tincidunt.',
            sabores: [
                'Biscoito', 'Morango', 'Pave'
            ]
        },
        {
            nome: 'Ullamcorper',
            id: 'esp5',
            img: 'esp5',
            descricao: 'Duis tristique erat vel sollicitudin auctor. Cras tortor nunc, varius sed enim sit amet.',
           
        },
        {
            nome: 'Nullam tristique',
            id: 'esp6',
            img: 'esp6',
            descricao: 'Donec viverra odio eu ante consequat, id eleifend ipsum tristique. Nullam condimentum sed urna at tincidunt.',
           
        },
        {
            nome: 'Morbi sodales',
            id: 'esp7',
            img: 'esp7',
            descricao: 'Sed mattis neque purus, ac mollis urna rhoncus non. Proin faucibus interdum nisi, quis auctor.',
           
        },
        {
            nome: 'Pharetra lectus.',
            id: 'esp8',
            img: 'esp8',
            descricao: 'Duis tristique erat vel sollicitudin auctor. Cras tortor nunc, varius sed enim sit amet.',
        } 
    ],
    acais: [
        {
            nome: 'Fringilla',
            id: 'acai1',
            img: 'acai1',
            descricao: 'Sed mattis neque purus, ac mollis urna rhoncus non. Proin faucibus interdum nisi, quis auctor.',
           
        },
        {
            nome: 'Donec enim eros',
            id: 'acai2',
            img: 'acai2',
            descricao: 'Duis tristique erat vel sollicitudin auctor. Cras tortor nunc, varius sed enim sit amet.',
           
        },
        {
            nome: 'Quisque id sodales',
            id: 'acai3',
            img: 'acai3',
            descricao: 'Donec viverra odio eu ante consequat, id eleifend ipsum tristique. Nullam condimentum sed urna at tincidunt.',
           
        }
    ],
    maisVendidos: [
        {
            nome: 'Suspendisse sed',
            id: 'sorv2',
            img: 'sorv2',
            descricao: 'Donec viverra odio eu ante consequat, id eleifend ipsum tristique. Nullam condimentum sed urna at tincidunt.',
            sabores: [
                'Amora', 'Framboesa', 'Mirtilo', 'Cereja'
            ]
        },
        {
            nome: 'Fringilla',
            id: 'acai1',
            img: 'acai1',
            descricao: 'Sed mattis neque purus, ac mollis urna rhoncus non. Proin faucibus interdum nisi, quis auctor.',
           
        },
        {
            nome: 'Maecenas dignissim',
            id: 'pi1',
            img: 'pi1',
            descricao: 'Donec viverra odio eu ante consequat, id eleifend ipsum tristique. Nullam condimentum sed urna at tincidunt.',
            sabores: [
                'Morango', 'Amora', 'Uva', 'Abacaxi'
            ]
        },
        {
            nome: 'Suspendisse semper',
            id: 'pi2',
            img: 'pi2',
            descricao: 'Duis tristique erat vel sollicitudin auctor. Cras tortor nunc, varius sed enim sit amet.',
            sabores: [
                'Chocolate', 'Chocolate branco', 'Morango'
            ]
        },
        {
            nome: 'Duis laoreet ',
            id: 'esp3',
            img: 'esp3',
            descricao: 'Sed mattis neque purus, ac mollis urna rhoncus non. Proin faucibus interdum nisi, quis auctor.',
            sabores: [
                'Chocolate', 'Nozes', 'Pessego'
            ]
        },
        {
            nome: 'Pellentesque',
            id: 'esp4',
            img: 'esp4',
            descricao: 'Donec viverra odio eu ante consequat, id eleifend ipsum tristique. Nullam condimentum sed urna at tincidunt.',
            sabores: [
                'Biscoito', 'Morango', 'Pave'
            ]
        },
        {
            nome: 'Donec',
            id: 'sorv6',
            img: 'sorv6',
            descricao: 'Donec viverra odio eu ante consequat, id eleifend ipsum tristique. Nullam condimentum sed urna at tincidunt.',
            sabores: [
                'Chocolate', 'Biscoito', 'Pave', 'Creme', 'Flocos'
            ]
        }
    ]
}

export default produtos