import { DrawerList } from "../interfaces";
import { AttachMoneyOutlined, BrushOutlined, CreditCardOutlined, FormatListBulletedOutlined, HelpOutlineOutlined, HomeOutlined, LanguageOutlined, LocalShippingOutlined, LogoutOutlined, PersonOutlineOutlined, RadarOutlined, SettingsOutlined, ShareOutlined, ShoppingCartOutlined, VisibilityOutlined, WidgetsOutlined } from "@mui/icons-material";

export  const DrawerItems: DrawerList[] = [
    {
      name: "Dashboard",
      icon: <HomeOutlined color='primary' />,
      path: '/'
    },
    {
      name: "Catalogue",
      icon: <ShoppingCartOutlined color='primary' />,
      subItems: [
        {
          name: "Catalog 1",
          path: '/catalogue/catalog-1'
        },
        {
          name: "Catalog 2",
          path: '/catalogue/catalog-2'
        }
      ]
    },
    {
      name: "Order",
      icon: <FormatListBulletedOutlined color='primary' />,
      badge: 14,
      path: '/order'
    },
    {
      name: "Customers",
      icon: <PersonOutlineOutlined color='primary' />,
      path: '/customer'
    },
    {
      name: "Marketing",
      icon: <RadarOutlined color='primary' />,
      subItems: [
        {
          name: "Discount codes",
          path: '/marketing/discount-codes'
        },
        {
          name: "Exit intent",
          path: '/marketing/exit-intent'
        },
        {
          name: "Checkout Features",
          path: '/marketing/checkout-features'
        },
        {
          name: "Post purchase conversion",
          path: '/marketing/post-purchase-conversion'
        },
        {
          name: "Cart abandonment",
          path: '/marketing/abandoned-cart'
        },
        {
          name: "Timer checkout",
          path:'/marketing/timer-checkout'
        },
        {
          name: "Self on Social",
          path: '/marketing/self-on-social'
        },
        {
          name: "Special Offer",
          path: '/marketing/special-offer'
        },
        {
          name: "Seasonal Offer",
          path: '/marketing/seasonal-offer'
        }
      ]
    },
    {
      name: "Delivery Option",
      icon: <LocalShippingOutlined color='primary' />,
      path: '/delivery-option'
    },
    {
      name: " Payment Option",
      icon: <AttachMoneyOutlined color='primary' />,
      path: '/payment-option'
    },
    {
      name: "Store Design",
      icon: <BrushOutlined color='primary' />,
      path: '/store-design'
    },
    {
      name: "Subscription",
      icon: <CreditCardOutlined color='primary' />,
      path: '/subscription'
    },
    {
      name: "Integration",
      icon: <LanguageOutlined color='primary' />,
      path: '/integration'
    },
    {
      name: "Extensions",
      icon: <WidgetsOutlined color='primary' />,
      path: '/extensions'
    },
    {
      name: "Settings",
      icon: <SettingsOutlined color='primary' />,
      path: '/settings'
    },
    {
      name: "Log out",
      icon: <LogoutOutlined color='primary' />,
      path: '/logout'
    },
  ]

 export const ExtraItems: DrawerList[] = [
    {
      name: "Customer Support",
      icon: <HelpOutlineOutlined color='primary' />,
      path: 'customer-support'
    },
    {
      name: "Share your shop",
      icon: <ShareOutlined color='primary' />,
      path: 'share-your-shop'
    },
    {
      name: "View your shop",
      icon: <VisibilityOutlined color='primary' />,
      path: 'view-your-shop'
    }
  ]
