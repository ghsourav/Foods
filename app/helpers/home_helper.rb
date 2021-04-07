module HomeHelper


    def timings(menu)
        current_time_hour = Time.now.hour
        menu.timestart.to_i <= current_time_hour && menu.timesend.to_i > current_time_hour
    end
end
