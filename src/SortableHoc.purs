module SortableHoc where

import React (ReactElement)
import Control.Monad.Eff (Eff)

type Config = {withRef :: Boolean}

foreign import sortableContainer :: forall e. ReactElement
                                 -> Config
                                 -> Eff e ReactElement


foreign import sortableElement   :: forall e. ReactElement
                                 -> Config
                                 -> Eff e ReactElement


foreign import sortableHandle    :: forall e. ReactElement
                                 -> Config
                                 -> Eff e ReactElement



foreign import arrayMove         :: forall e a. Array a
                                 -> Int
                                 -> Int
                                 -> Eff e (Array a)
