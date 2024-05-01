import React from 'react'
// import CalorieCalculator from './views/theme/CalorieCalculator/CalorieCalculator'
const CalorieCalculator = React.lazy(
  () => import('./views/theme/CalorieCalculator/CalorieCalculator'),
)
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Typography = React.lazy(() => import('./views/theme/typography/Typography'))

// About Meals
const Buttons = React.lazy(() => import('./views/buttons/MealDiary/MealDiary'))
const ButtonGroups = React.lazy(() => import('./views/buttons/MealPlans/MealPlans'))

//User Profile
const UserProfile = React.lazy(() => import('./views/users/UserProfile/UserProfile'))
const Settings = React.lazy(() => import('./views/users/Settings/Settings'))

//Forms
const ChecksRadios = React.lazy(() => import('./views/forms/checks-radios/ChecksRadios'))
const FloatingLabels = React.lazy(() => import('./views/forms/floating-labels/FloatingLabels'))
const FormControl = React.lazy(() => import('./views/forms/form-control/FormControl'))
const InputGroup = React.lazy(() => import('./views/forms/input-group/InputGroup'))
const Layout = React.lazy(() => import('./views/forms/layout/Layout'))
const Range = React.lazy(() => import('./views/forms/range/Range'))
const Select = React.lazy(() => import('./views/forms/select/Select'))
const Validation = React.lazy(() => import('./views/forms/validation/Validation'))

const Charts = React.lazy(() => import('./views/charts/Charts'))

// Icons
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'))
const Flags = React.lazy(() => import('./views/icons/flags/Flags'))
const Brands = React.lazy(() => import('./views/icons/brands/Brands'))

// Notifications
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'))
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'))
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'))
const Toasts = React.lazy(() => import('./views/notifications/toasts/Toasts'))

const Widgets = React.lazy(() => import('./views/widgets/Widgets'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/theme', name: 'Users Dashboard', element: CalorieCalculator, exact: true },
  { path: '/theme/calorieCalculator', name: 'Calorie Calculator', element: CalorieCalculator },
  { path: '/theme/typography', name: 'Typography', element: Typography },

  { path: '/buttons', name: 'About Meals', element: ButtonGroups, exact: true },
  { path: '/buttons/mealdiary', name: 'Meal Diary', element: Buttons },
  { path: '/buttons/mealplans', name: 'Meal Plans', element: ButtonGroups },

  { path: '/users', name: 'User Profiles', element: UserProfile, exact: true },
  { path: '/users/user-profile', name: 'User Profile', element: UserProfile },
  { path: '/users/settings', name: 'Settings', element: Settings },

  { path: '/charts', name: 'Charts', element: Charts },
  { path: '/forms', name: 'Forms', element: FormControl, exact: true },
  { path: '/forms/form-control', name: 'Form Control', element: FormControl },
  { path: '/forms/select', name: 'Select', element: Select },
  { path: '/forms/checks-radios', name: 'Checks & Radios', element: ChecksRadios },
  { path: '/forms/range', name: 'Range', element: Range },
  { path: '/forms/input-group', name: 'Input Group', element: InputGroup },
  { path: '/forms/floating-labels', name: 'Floating Labels', element: FloatingLabels },
  { path: '/forms/layout', name: 'Layout', element: Layout },
  { path: '/forms/validation', name: 'Validation', element: Validation },
  { path: '/icons', exact: true, name: 'Icons', element: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', element: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', element: Flags },
  { path: '/icons/brands', name: 'Brands', element: Brands },
  { path: '/notifications', name: 'Notifications', element: Alerts, exact: true },
  { path: '/notifications/alerts', name: 'Alerts', element: Alerts },
  { path: '/notifications/badges', name: 'Badges', element: Badges },
  { path: '/notifications/modals', name: 'Modals', element: Modals },
  { path: '/notifications/toasts', name: 'Toasts', element: Toasts },
  { path: '/widgets', name: 'Widgets', element: Widgets },
]

export default routes
