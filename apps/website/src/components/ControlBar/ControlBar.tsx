import cx from 'classnames'
import Slider from './Slider'
import SegmentedControl from './SegmentedControl'
import ColorSlider from './ColorSlider'
import { useAppContext } from '../../hooks'
import SearchInput from '../SearchInput'
import Tabs from '../Tabs'

interface Props {
  className?: string
}
export default function ControlBar({ className }: Props): JSX.Element {
  const {
    variant,
    setVariant,
    size,
    setSize,
    color,
    setColor,
    searchTerm,
    setSearchTerm,
    type,
    setType,
  } = useAppContext()

  return (
    <div className={cx('relative flex flex-col gap-8', className)}>
      <Tabs
        activeTab={type}
        onChange={(value) => setType(value as 'tokens' | 'networks')}
      />
      <div className="grid grid-cols-10 gap-4 lg:gap-0">
        <div className="col-span-5 lg:col-span-4 flex items-center justify-center md:pr-4">
          <SearchInput
            onInput={(e) => setSearchTerm(e.target.value)}
            placeholder="Search"
            value={searchTerm}
          />
        </div>
        <div className="col-span-5 lg:col-span-2 flex items-center justify-center px-4">
          <SegmentedControl
            className=""
            options={['mono', 'branded']}
            selected={variant === 'mono' ? 'mono' : 'branded'}
            onChange={(value) => setVariant(value as 'mono' | 'branded')}
          />
        </div>
        <div className="col-span-full lg:col-span-2 flex items-center justify-center px-4">
          <Slider
            label="size"
            minValue={16}
            maxValue={96}
            value={size}
            setValue={(value) => setSize(value)}
          />
        </div>
        <div className="col-span-full lg:col-span-2 flex items-center justify-center px-4">
          <ColorSlider
            disabled={variant === 'branded'}
            label="color"
            color={color}
            setColor={setColor}
          />
        </div>
      </div>
    </div>
  )
}
