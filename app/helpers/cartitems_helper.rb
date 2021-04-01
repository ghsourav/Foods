module CartitemsHelper
    def billamount
        @cartitem.collect{|cartitem| cartitem.total}.sum
    end
end
